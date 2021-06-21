/* eslint-disable react/prop-types */
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNewPostITChange } from '../../Redux/handleTextSlice';
import { editPostIT } from '../../Redux/postITsSlice';

const PostITsEdit = ({ post, setIsEditing }) => {
  const dispatch = useDispatch();
  const characterLimit = 200;
  const value = useSelector((state) => state.AddPostIT);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      dispatch(handleNewPostITChange(event.target.value));
      handleNewPostITChange('');
    }
  };
  const handleEditPostIT = () => {
    if (value.value.trim().length > 0) {
      const newPostIT = {
        id: post.id,
        textContent: value.value,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}${' '}Edited`,
        deleted: false,
      };

      dispatch(editPostIT(newPostIT));
      setIsEditing(false);
    }
  };

  return (
    <div className="note edit">
      <textarea
        className="textareaEdit"
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
        <div>
          <button onClick={() => setIsEditing(false)} type="button" className="save">Cancel</button>
          <div className="dividerEdit" />
          <button type="button" className="save" onClick={handleEditPostIT}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostITsEdit;
