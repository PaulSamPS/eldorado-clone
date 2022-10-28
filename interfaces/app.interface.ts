import { BasketInterface } from './basket.interface';
import { IProduct } from './product.interface';
import { ISlider } from './slider.interface';
import { IMenu } from './menu.interface';
import { IBrand } from './brand.interface';

export interface AppInterface {
  basket: BasketInterface;
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
  menu: IMenu[];
  brand: IBrand[];
  oneProduct: IProduct;
  productsYesterday: IProduct[];
  product: IProduct;
}
