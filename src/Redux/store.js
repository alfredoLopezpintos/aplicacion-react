import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import postITReducer from './testSlice';

const store = configureStore({
  reducer: {
    postITs: postITReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
