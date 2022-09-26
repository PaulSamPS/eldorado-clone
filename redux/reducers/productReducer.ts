import { IProduct } from '../../interfaces/product.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReduxProduct {
  products: IProduct[];
  oneProduct: IProduct[];
  isLoading: boolean;
}

const initialState: IReduxProduct = {
  products: [],
  oneProduct: [],
  isLoading: false,
};

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsLoadingProduct(state) {
      state.isLoading = true;
    },
    setSuccessProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export default productReducer.reducer;
