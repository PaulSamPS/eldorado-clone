import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import loginUser from './reducers/loginReducer';
import registration from './reducers/registrationReducer';
import { productReducer } from './reducers/productReducer';
import { typeReducer } from './reducers/typeReducer';
import { brandReducer } from './reducers/brandReducer';
import { menuReducer } from './reducers/menuReducer';
import { dayProductReducer } from './reducers/dayProducts.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  registration,
  loginUser,
  product: productReducer,
  dayProducts: dayProductReducer,
  type: typeReducer,
  brand: brandReducer,
  menu: menuReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
