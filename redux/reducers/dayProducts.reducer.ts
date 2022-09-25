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
      state.dayProducts = action.payload;
    },
    setClearDayProducts(state) {
      state.dayProducts = [];
    },
  },
});

export default dayProductReducer.reducer;
