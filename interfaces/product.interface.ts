interface IItem {
  _id: string;
  name: string;
  description: string;
}

export interface IFeatures {
  _id: string;
  title: string;
  item: IItem[];
}

interface IImg {
  fileName: string;
}

export interface IProduct {
  _id: string;
  img: IImg[];
  rotate3d: IImg[];
  price: number;
  oldPrice: number;
  typeId: number;
  brandId: number;
  name: string;
  features: IFeatures[];
  rating: number;
}
