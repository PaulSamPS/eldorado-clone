import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import loginUser from './reducers/loginReducer';
import registration from './reducers/registrationReducer';
import productReducer from './reducers/productReducer';
import featuresReducer from './reducers/featuresReducer';
import zoomImageReducer from './reducers/zoomImageReducer';
import dayProductReducer from './reducers/dayProducts.reducer';
import basketReducer from './reducers/basketReducer';
import { typeReducer } from './reducers/typeReducer';
import { brandReducer } from './reducers/brandReducer';
import { menuReducer } from './reducers/menuReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['featuresReducer'],
};

export const rootReducer = combineReducers({
  registration,
  loginUser,
  productReducer,
  dayProductReducer,
  featuresReducer,
  type: typeReducer,
  brand: brandReducer,
  menu: menuReducer,
  zoomImageReducer,
  basketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
