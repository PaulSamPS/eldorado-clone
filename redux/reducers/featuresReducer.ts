import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  features: any[];
}

const initialState: UserState = {
  features: [],
};

export const featuresReducer = createSlice({
  name: 'features',
  initialState,
  reducers: {
    setFeaturesTitle(state, action: PayloadAction<any>) {
      state.features = [...state.features, action.payload];
    },
    setFeaturesItem(state, action: PayloadAction<any>) {
      const filterItem = state.features.find((i) => i.number === action.payload.number);
      filterItem.item.push(action.payload.item);
    },
  },
});

export const { setFeaturesTitle, setFeaturesItem } = featuresReducer.actions;

export default featuresReducer.reducer;
