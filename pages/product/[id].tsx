import React from 'react';
import { H } from '../../components/Ui/H/H';
import { GetStaticPaths, GetStaticProps } from 'next';
import { $host } from '../../http';
import { IProduct } from '../../interfaces/product.interface';
import ProductInfo from '../../page-components/ProductInfo/ProductInfo';

const ProductId = ({ product }: ProductProps) => {
  return <ProductInfo product={product} />;
};

export default ProductId;

export const getStaticPaths: GetStaticPaths = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const products = getProducts.data;
  const paths = products.map((p) => ({ params: { id: p._id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({ params }) => {
  const getProduct = await $host.get<IProduct>(`product/${params!.id}`);

  const product = getProduct.data;
  return {
    props: {
      product,
    },
  };
};

interface ProductProps extends Record<string, unknown> {
  product: IProduct;
}
