import { createSlice } from '@reduxjs/toolkit';

interface IIsModal {
  isModal: boolean;
}

const initialState: IIsModal = {
  isModal: false,
};

export const zoomImageReducer = createSlice({
  name: 'isModal',
  initialState,
  reducers: {
    setIsModalTrue(state) {
      state.isModal = true;
    },
    setIsModalFalse(state) {
      state.isModal = false;
    },
  },
});

export const { setIsModalTrue, setIsModalFalse } = zoomImageReducer.actions;

export default zoomImageReducer.reducer;
