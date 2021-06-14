import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostITs.css';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { deletePostIT } from '../../Redux/postITsSlice';
import { handleEdit } from '../../Redux/handleTextSlice';
import AddPost from '../AddPostIT';

export const PostITs = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postITs);
  const result = posts.map((post) => !post.deleted && (
    <div className="note" key={post.id}>
      <span>{ post.textContent }</span>
      <div className="note-footer">
        <small>{ post.date }</small>
        <div>
          <MdModeEdit onClick={() => dispatch(handleEdit(true))} className="icon" size="1.3em" />
          <div className="divider" />
          <MdDelete onClick={() => dispatch(deletePostIT(post))} className="icon" size="1.3em" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="notes-list">
      {result}
      <AddPost />
    </div>
  );
};

export default PostITs;
