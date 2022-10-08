import { IProduct } from '../../interfaces/product.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReduxProduct {
  dayProducts: IProduct[];
}

const initialState: IReduxProduct = {
  dayProducts: [],
};

export const dayProductReducer = createSlice({
  name: 'dayProducts',
  initialState,
  reducers: {
    setSuccessDayProducts(state, action: PayloadAction<IProduct[]>) {
      state.dayProducts = [...state.dayProducts].concat(action.payload);
    },
    setClearDayProducts(state) {
      state.dayProducts = [];
    },
  },
});

export const { setSuccessDayProducts, setClearDayProducts } = dayProductReducer.actions;

export default dayProductReducer.reducer;
