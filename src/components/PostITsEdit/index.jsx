/* eslint-disable react/prop-types */
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleEditPostITChange } from '../../Redux/handleTextSlice';
import { editPostIT } from '../../Redux/postITsSlice';
import PostITsEditCSS from './PostITsEdit.module.css';
import HomeCSS from '../Home/Home.module.css';

const PostITsEdit = ({ post, setIsEditing }) => {
  const dispatch = useDispatch();
  const characterLimit = 200;
  const value = useSelector((state) => state.AddPostIT);

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      dispatch(handleEditPostITChange(event.target.value));
      handleEditPostITChange('');
    }
  };
  const handleEditPostIT = () => {
    if (value.textEditPostIt.trim().length > 0) {
      const newPostIT = {
        id: post.id,
        textContent: value.textEditPostIt,
        date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}${' '}Edited`,
        deleted: false,
      };

      dispatch(editPostIT(newPostIT));
      setIsEditing(false);
    }
  };

  return (
    <div className={PostITsEditCSS.note}>
      <textarea
        className={PostITsEditCSS.textarea}
        cols="10"
        rows="8"
        placeholder="Type here..."
        maxLength="200"
        onChange={handleChange}
      />
      <div className={HomeCSS.footer}>
        <small>
          {characterLimit - value.textEditPostIt.length}
          {' '}
          Remaining
        </small>
        <div>
          <button onClick={() => setIsEditing(false)} type="button" className={HomeCSS.save}>Cancel</button>
          <div className={PostITsEditCSS.divider} />
          <button type="button" className={HomeCSS.save} onClick={handleEditPostIT}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostITsEdit;
