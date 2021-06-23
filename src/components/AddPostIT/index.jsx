import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNewPostITChange } from '../../Redux/handleTextSlice';
import { addPostIT } from '../../Redux/postITsSlice';
import HomeCSS from '../Home/Home.module.css';
import AddPostITCSS from './AddPostIT.module.css';

export const AddPostIT = () => {
  const dispatch = useDispatch();
  const characterLimit = 200;
  const value = useSelector((state) => state.AddPostIT);
  const handleAddPostIT = () => {
    if (value.value.trim().length > 0) {
      dispatch(addPostIT(value));
      document.getElementById(1000).value = '';
      dispatch(handleNewPostITChange(''));
    }
  };
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      dispatch(handleNewPostITChange(event.target.value));
    }
  };
  return (
    <div className={AddPostITCSS.note}>
      <textarea
        id="1000"
        cols="10"
        rows="8"
        placeholder="Type here..."
        maxLength="200"
        onChange={handleChange}
      />
      <div className={HomeCSS.footer}>
        <small>
          {characterLimit - value.value.length}
          {' '}
          Remaining
        </small>
        <button
          type="button"
          className={HomeCSS.save}
          onClick={handleAddPostIT}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPostIT;
