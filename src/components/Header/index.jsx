import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import HeaderCSS from './Header.module.css';

export const Header = () => {
  const { posts } = useSelector((state) => state.postITs);
  const deltedPosts = posts.filter((post) => post.deleted);
  const result = (((deltedPosts.length !== 0)
  && (<MdDeleteForever className={HeaderCSS.trashIcon} />))
    || ((deltedPosts.length === 0) && (<MdDelete className={HeaderCSS.trashIcon} />)));

  return (
    <div className={HeaderCSS.header}>
      <Link className={HeaderCSS.home} to="/aplicacion-react">
        <b>PostITs</b>
      </Link>
      <Link className={HeaderCSS.trash} to="/TrashBin">
        {result}
        <b>Trash Bin</b>
      </Link>
    </div>
  );
};

export default Header;
