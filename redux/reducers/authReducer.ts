import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/interfaces';

interface UserState {
  errorMessage: string;
  user: IUser | null;
  isLoading: boolean;
}

const initialState: UserState = {
  errorMessage: '',
  isLoading: false,
  user: null,
};

export const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.errorMessage = '';
      state.isLoading = false;
      state.user = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    setLogout(state) {
      state.isLoading = false;
      state.errorMessage = '';
      state.user = {} as IUser;
    },
  },
});

export const { setUser } = authReducer.actions;

export default authReducer.reducer;
