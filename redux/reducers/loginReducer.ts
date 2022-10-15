import { IUser } from '../../interfaces/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  errorMessage: string;
  userInfo: IUser;
  isLoading: boolean;
}

const initialState: UserState = {
  errorMessage: '',
  isLoading: false,
  userInfo: {
    _id: '',
    userName: '',
    role: '',
    email: '',
  },
};

export const loginReducer = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setSuccess(state, action: PayloadAction<IUser>) {
      state.errorMessage = '';
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    setErrorLogin(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    setLogout(state) {
      state.isLoading = false;
      state.errorMessage = '';
      state.userInfo = {
        _id: '',
        userName: '',
        role: '',
        email: '',
      };
    },
  },
});

export const { setErrorLogin } = loginReducer.actions;

export default loginReducer.reducer;
