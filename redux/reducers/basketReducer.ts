import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketInterface } from '../../interfaces/basket.interface';

interface IReduxBasket {
  basket: BasketInterface;
  isLoading: boolean;
  error: string;
}

const initialState: IReduxBasket = {
  isLoading: false,
  error: '',
  basket: {} as BasketInterface,
};

export const basketReducer = createSlice({
  name: 'basketReducer',
  initialState,
  reducers: {
    setLoadingBasket(state) {
      state.isLoading = true;
    },
    setSuccessBasket(state, action: PayloadAction<BasketInterface>) {
      state.isLoading = false;
      state.basket = action.payload;
    },
    setErrorBaskets(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default basketReducer.reducer;
