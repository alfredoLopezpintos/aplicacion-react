/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const handleTextSlice = createSlice({
  name: 'handleText',
  initialState: {
    textAddPostIt: '',
    textEditPostIt: '',
    edit: false,
    post: '',
  },
  reducers: {
    handleNewPostITChange: (state, action) => {
      state.textAddPostIt = action.payload;
    },
    handleEditPostITChange: (state, action) => {
      state.textEditPostIt = action.payload;
    },
    handleNewID: (state, action) => {
      state.id = action.payload;
    },
    handleEdit: (state, action) => {
      state.edit = true;

      state.post = action.payload;
    },
    cancelHandleEdit: (state) => {
      state.edit = false;
    },
  },
});

export const {
  handleNewPostITChange, handleEditPostITChange, handleNewID, handleEdit, cancelHandleEdit,
} = handleTextSlice.actions;

export default handleTextSlice.reducer;
