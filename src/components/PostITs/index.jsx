import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostITs.css';
import { MdDelete } from 'react-icons/md';
import { deletePostIT } from '../../Redux/postITsSlice';
import AddPost from '../AddPostIT';

export const PostITs = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postITs);
  const result = posts.map(({
    id, textContent, date, deleted,
  }) => !deleted && (
    <div className="note" key={id}>
      <span>{ textContent }</span>
      <div className="note-footer">
        <small>{ date }</small>
        <MdDelete onClick={() => dispatch(deletePostIT(id))} className="delete-icon" size="1.3em" />
      </div>
    </div>
  ));
  return (
    <>
      {result}
      <AddPost />
    </>
  );
};

export default PostITs;
