import { createSlice } from '@reduxjs/toolkit';

const postITsSlice = createSlice({
  name: 'postits',
  initialState: {
    posts: [
      {
        id: 1, textContent: 'postIT1', date: '29/04/2021', deleted: false,
      },
      {
        id: 2, textContent: 'postIT2', date: '10/01/2021', deleted: false,
      },
      {
        id: 3, textContent: 'postIT3', date: '22/02/2021', deleted: false,
      },
    ],
  },
  reducers: {
    addPostIT: (state, action) => {
      const newPostIT = {
        id: state.posts.slice(-1)[0].id + 1,
        textContent: action.payload.value,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        deleted: false,
      };
      // eslint-disable-next-line no-param-reassign
      state.posts = [...state.posts, newPostIT];
    },
  },
});

export const { addPostIT, testLog } = postITsSlice.actions;

export default postITsSlice.reducer;
