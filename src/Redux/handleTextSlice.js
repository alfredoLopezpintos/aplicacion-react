import { createSlice } from '@reduxjs/toolkit';

const handleTextSlice = createSlice({
  name: 'handleText',
  initialState: {
    value: '',
  },
  reducers: {
    handleNewPostITChange: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export const { handleNewPostITChange } = handleTextSlice.actions;

export default handleTextSlice.reducer;
