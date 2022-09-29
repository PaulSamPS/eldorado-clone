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
      filterItem!.item.push(action.payload.item);
    },
    removeFeaturesItem(state, action: PayloadAction<any>) {
      state.features = state.features.filter((i) => i.number !== action.payload);
    },
    removeFeaturesItemDesc(state, action: PayloadAction<any>) {
      const findItem = state.features.find((i) => i.number === action.payload.titleNumber);
      const filteredItems = findItem.item.filter((i: any) => i.number !== action.payload.number);
      findItem.item = filteredItems;
    },
  },
});

export const { setFeaturesTitle, setFeaturesItem, removeFeaturesItem, removeFeaturesItemDesc } =
  featuresReducer.actions;

export default featuresReducer.reducer;
