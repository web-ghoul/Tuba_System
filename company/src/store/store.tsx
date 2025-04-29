import { configureStore } from '@reduxjs/toolkit';
import authReducers from './authSlice.tsx';

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
