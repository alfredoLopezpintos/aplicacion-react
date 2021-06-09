import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNewPostITChange } from '../../Redux/handleTextSlice';
import { addPostIT } from '../../Redux/postITsSlice';
import './PostIT.css';

export const AddPostIT = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.AddPostIT);
  const handleAddPostIT = () => {
    if (value.value.toString().trim().length > 0) {
      dispatch(addPostIT(value));
      handleNewPostITChange('');
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type here..."
        onChange={(event) => dispatch(handleNewPostITChange(event.target.value))}
      />
      <div className="note-footer">
        <small>200 Remaining</small>
        <button
          type="button"
          className="save"
          onClick={handleAddPostIT}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPostIT;
