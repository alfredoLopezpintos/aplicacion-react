import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'postits',
  initialState: {
    posts: [
      { id: 1, textContent: 'postIT1', deleted: false },
      { id: 2, textContent: 'postIT2', deleted: false },
      { id: 3, textContent: 'postIT3', deleted: false },
    ],
  },
  reducers: {
    addPostIT: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        deleted: false,
      };
      state.push(newPostIT);
    },
    testLog: (state) => {
      console.log(`Working! ${state}`);
    },
  },
});

export const { addPostIT, testLog } = testSlice.actions;

export default testSlice.reducer;
