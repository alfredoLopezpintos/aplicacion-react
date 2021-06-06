import { configureStore } from '@reduxjs/toolkit';
import postITReducer from './testSlice';

export default configureStore({
  reducer: {
    postITs: postITReducer,
  },
});
