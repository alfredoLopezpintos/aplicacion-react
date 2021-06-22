import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever, MdUndo } from 'react-icons/md';
import { deleteForeverPostIT, recoverPostIT } from '../../Redux/postITsSlice';
import './TrashBin.css';

export const TrashBin = () => {
  const dispatch = useDispatch();
  let { posts } = useSelector((state) => state.postITs);
  if (posts.length >= 2) {
    posts = posts.slice().sort((a, b) => b.system_date - a.system_date);
    posts.forEach((x) => {
      console.log(x.system_date);
    });
  }

  const result = posts.map((post) => post.deleted && (
    <div className="trash-note" key={post.id}>
      <span>{ post.textContent }</span>
      <div className="note-footer">
        <small>{ post.date }</small>
        <div>
          <MdUndo onClick={() => dispatch(recoverPostIT(post))} className="icon" />
          <div className="divider" />
          <MdDeleteForever
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              const response = confirm('Are you sure you want to delete this PostIT forever?\nYou will not be able to recover it!');
              if (response) dispatch(deleteForeverPostIT(post.id));
            }}
            className="icon"
          />
        </div>
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
