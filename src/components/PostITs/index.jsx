import React from 'react';
import { useSelector } from 'react-redux';
import './PostITs.css';
import { MdDeleteForever } from 'react-icons/md';
import AddPost from '../AddPostIT';

export const PostITs = () => {
  const { posts } = useSelector((state) => state.postITs);
  const result = posts.map(({ id, textContent, deleted }) => (
    <div className="note" key={id}>
      <span>{ textContent }</span>
      <div className="note-footer">
        <small>{ textContent }</small>
        <small>{ deleted }</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
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
