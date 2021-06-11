import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PostITs.css';
import { MdDelete } from 'react-icons/md';
import { deletePostIT } from '../../Redux/postITsSlice';
import AddPost from '../AddPostIT';

export const PostITs = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postITs);
  const result = posts.map((post) => !post.deleted && (
    <div className="note" key={post.id}>
      <span>{ post.textContent }</span>
      <div className="note-footer">
        <small>{ post.date }</small>
        <MdDelete onClick={() => dispatch(deletePostIT(post))} className="delete-icon" size="1.3em" />
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
