import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import postITReducer from './testSlice';
import addPostITReducer from './handleTextSlice';

const store = configureStore({
  reducer: {
    postITs: postITReducer,
    AddPostIT: addPostITReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
