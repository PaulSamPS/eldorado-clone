export interface ISliderItem {
  name: string;
  img: string;
  _id: string;
}

export interface ISlider {
  _id: string;
  l: ISliderItem[];
  s: ISliderItem[];
}
