import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRegistration {
  error: string | undefined;
  isLoading: boolean;
}

const initialState: IRegistration = {
  error: '',
  isLoading: false,
};

export const registrationReducer = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setSuccess(state) {
      state.isLoading = false;
      state.error = '';
    },
    setErrorRegistration(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setErrorRegistration } = registrationReducer.actions;

export default registrationReducer.reducer;
