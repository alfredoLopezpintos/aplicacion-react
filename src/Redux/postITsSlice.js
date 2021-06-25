/* eslint-disable no-param-reassign */
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
        textContent: action.payload.textAddPostIt,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        deleted: false,
      };
      state.posts = [...state.posts, newPostIT];
    },
    editPostIT: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: false,
      };
      const newPosts = state.posts.filter((post) => post.id !== action.payload.id);
      state.posts = [...newPosts, newPostIT];
    },
    deletePostIT: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: true,
      };
      const newPosts = state.posts.filter((post) => post.id !== action.payload.id);
      state.posts = [...newPosts, newPostIT];
    },
    deleteForeverPostIT: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    recoverPostIT: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: false,
      };
      const newPosts = state.posts.filter((post) => post.id !== action.payload.id);
      state.posts = [...newPosts, newPostIT];
    },
    reloadPostITs: (state, action) => {
      const newPostIT = {
        id: action.payload.id,
        textContent: action.payload.textContent,
        date: action.payload.date,
        deleted: action.payload.deleted,
      };
      state.posts = [...state.posts, newPostIT];
    },
  },
});

export const {
  addPostIT, deletePostIT, deleteForeverPostIT, editPostIT, recoverPostIT, reloadPostITs,
} = postITsSlice.actions;

export default postITsSlice.reducer;
