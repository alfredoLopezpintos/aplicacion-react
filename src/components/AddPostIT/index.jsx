import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNewPostITChange, handleNewID, handleEdit } from '../../Redux/handleTextSlice';
import { addPostIT, editPostIT } from '../../Redux/postITsSlice';
import './PostIT.css';

export const AddPostIT = () => {
  const dispatch = useDispatch();
  const characterLimit = 200;
  const { edit } = useSelector((state) => state.AddPostIT);
  const value = useSelector((state) => state.AddPostIT);
  const { id } = useSelector((state) => state.AddPostIT);
  const handleAddPostIT = () => {
    if (value.value.trim().length > 0) {
      const theId = nanoid();
      dispatch(handleNewID(theId));
      dispatch(addPostIT([value.value, theId]));
      handleNewPostITChange('');
    }
  };
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      dispatch(handleNewPostITChange(event.target.value));
      handleNewPostITChange('');
    }
  };
  const handleEditSave = () => {
    if (value.value.trim().length > 0) {
      dispatch(editPostIT(value.value, id));
      handleNewPostITChange('');
    }
  };

  const result = ((
    !edit && (
      <div className="note new">
        <textarea
          cols="10"
          rows="8"
          placeholder="Type here..."
          maxLength="200"
          onChange={handleChange}
        />
        <div className="note-footer">
          <small>
            {characterLimit - value.value.length}
            {' '}
            Remaining
          </small>
          <button
            type="button"
            className="save"
            onClick={handleAddPostIT}
          >
            Save
          </button>
        </div>
      </div>
    )) || (edit && (
      <div className="note new edit">
        <textarea
          cols="10"
          rows="8"
          placeholder="Edit here..."
          maxLength="200"
          onChange={handleChange}
          className="edit"
        />
        <div className="note-footer">
          <small>
            {characterLimit - value.value.length}
            {' '}
            Remaining
          </small>
          <div>
            <button onClick={() => dispatch(handleEdit(false))} type="button" className="save">Cancel</button>
            <div className="dividerEdit" />
            <button onClick={handleEditSave} type="button" className="save">Save</button>
          </div>
        </div>
      </div>
  )));
  return (
    <>
      {result}
    </>
  );
};

export default AddPostIT;
