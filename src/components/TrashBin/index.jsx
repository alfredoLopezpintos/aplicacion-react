import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { deleteForeverPostIT } from '../../Redux/postITsSlice';
import './TrashBin.css';

export const TrashBin = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postITs);
  const result = posts.map((post) => post.deleted && (
    <div className="trash-note" key={post.id}>
      <span>{ post.textContent }</span>
      <div className="note-footer">
        <small>{ post.date }</small>
        <MdDeleteForever onClick={() => dispatch(deleteForeverPostIT(post.id))} className="delete-icon" size="1.3em" />
      </div>
    </div>
  ));
  return (
    <div className="notes-list">
      {result}
    </div>
  );
};

export default TrashBin;
