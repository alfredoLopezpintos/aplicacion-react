import React from 'react';
import { useDispatch } from 'react-redux';
import { handleNewPostITChange } from '../../Redux/handleTextSlice';
import './PostIT.css';

export const AddPostIT = () => {
  const dispatch = useDispatch();
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
        <button type="button" className="save">Save</button>
      </div>
    </div>
  );
};

export default AddPostIT;
