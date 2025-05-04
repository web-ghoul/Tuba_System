import { configureStore } from '@reduxjs/toolkit';
import authReducers from './authSlice.tsx';
import profileReducers from './profileSlice.tsx';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    profile: profileReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
