interface IInfo {
  _id: string;
  title: string;
  description: string;
  productId: number;
}

export interface IProduct {
  _id: number;
  img: [{ fileName: string }];
  price: number;
  oldPrice?: number;
  typeId: number;
  brandId: number;
  name: string;
  info: IInfo[];
  rating: number;
}
