interface IInfo {
  _id: string;
  title: string;
  description: string;
  productId: number;
}

interface IImg {
  fileName: string;
}

export interface IProduct {
  _id: number;
  img: IImg[];
  price: number;
  oldPrice: number;
  typeId: number;
  brandId: number;
  name: string;
  info: IInfo[];
  rating: number;
}
