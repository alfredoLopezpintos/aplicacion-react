import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever, MdUndo } from 'react-icons/md';
import { deleteForeverPostIT, recoverPostIT } from '../../Redux/postITsSlice';
import TrashBinCSS from './TrashBin.module.css';
import HomeCSS from '../Home/Home.module.css';

export const TrashBin = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postITs);

  const result = posts.map((post) => post.deleted && (
    <div className={TrashBinCSS.note} key={post.id}>
      <span>{ post.textContent }</span>
      <div className={HomeCSS.footer}>
        <small>{ post.date }</small>
        <div>
          <MdUndo onClick={() => dispatch(recoverPostIT(post))} className={HomeCSS.icon} />
          <div className={HomeCSS.divider} />
          <MdDeleteForever
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              const response = confirm('Are you sure you want to delete this PostIT forever?\nYou will not be able to recover it!');
              if (response) dispatch(deleteForeverPostIT(post.id));
            }}
            className={HomeCSS.icon}
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div className={HomeCSS.list}>
      {result}
    </div>
  );
};

export default TrashBin;
