interface IItem {
  _id: string;
  name: string;
  description: string;
}

interface IInfo {
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
  price: number;
  oldPrice: number;
  typeId: number;
  brandId: number;
  name: string;
  features: IInfo[];
  rating: number;
}
