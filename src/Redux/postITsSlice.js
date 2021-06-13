import { createSlice, nanoid } from '@reduxjs/toolkit';

const postITsSlice = createSlice({
  name: 'postits',
  initialState: {
    posts: [],
  },
  reducers: {
    addPostIT: (state, action) => {
      const newPostIT = {
        id: nanoid(),
        textContent: action.payload.value,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        deleted: false,
      };
      // eslint-disable-next-line no-param-reassign
      state.posts = [...state.posts, newPostIT];
    },
    deletePostIT: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: true,
      };
      const newPosts = state.posts.filter((post) => post.id !== action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state.posts = [...newPosts, newPostIT];
    },
    deleteForeverPostIT: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    reloadPostITs: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: action.payload.deleted,
      };
      // eslint-disable-next-line no-param-reassign
      state.posts = [...state.posts, newPostIT];
    },
  },
});

export const {
  addPostIT, deletePostIT, deleteForeverPostIT, reloadPostITs,
} = postITsSlice.actions;

export default postITsSlice.reducer;
