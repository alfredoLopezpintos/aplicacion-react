import { createSlice } from '@reduxjs/toolkit';

const handleTextSlice = createSlice({
  name: 'handleText',
  initialState: {
    value: '',
    edit: false,
    id: '',
  },
  reducers: {
    handleNewPostITChange: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    handleNewID: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload;
    },
    handleEdit: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.edit = action.payload;
    },
  },
});

export const { handleNewPostITChange, handleNewID, handleEdit } = handleTextSlice.actions;

export default handleTextSlice.reducer;
