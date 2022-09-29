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
    setFeaturesTitleItem(state, action: PayloadAction<any>) {
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
    setFeaturesTitleText(state, action: PayloadAction<any>) {
      state.features = state.features.map((i) =>
        i.number === action.payload.number
          ? { ...i, [action.payload.key]: action.payload.value }
          : i
      );
    },
    setFeaturesItemText(state, action: PayloadAction<any>) {
      const findItem = state.features.find((i) => i.number === action.payload.titleNumber);
      const indexOfTitle = state.features.map((f) => f.number).indexOf(action.payload.titleNumber);
      const idx = state.features[indexOfTitle].item.map((f: any) => f.number);
      const indexOfItem = idx.indexOf(action.payload.number);

      findItem.item[indexOfItem] = {
        ...findItem.item[indexOfItem],
        [action.payload.key]: action.payload.value,
        number: action.payload.number,
      };
    },
  },
});

export const {
  setFeaturesTitleItem,
  setFeaturesItem,
  removeFeaturesItem,
  removeFeaturesItemDesc,
  setFeaturesTitleText,
  setFeaturesItemText,
} = featuresReducer.actions;

export default featuresReducer.reducer;
