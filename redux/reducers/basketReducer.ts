import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketInterface } from '@/interfaces';

interface IReduxBasket {
  basket: BasketInterface | null;
  isLoading: boolean;
  error: string;
}

const initialState: IReduxBasket = {
  isLoading: false,
  error: '',
  basket: null,
};

export const basketReducer = createSlice({
  name: 'basket',
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

export const { setSuccessBasket } = basketReducer.actions;

export default basketReducer.reducer;
