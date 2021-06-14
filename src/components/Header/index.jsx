import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import './Header.css';

export const Header = () => {
  const { posts } = useSelector((state) => state.postITs);
  const deltedPosts = posts.filter((post) => post.deleted);
  const result = ((deltedPosts.length !== 0) && (<MdDeleteForever className="trashIcon" />));
  const result2 = ((deltedPosts.length === 0) && (<MdDelete className="trashIcon" />));
  return (
    <div className="header">
      <Link className="home" to="/">
        <b>PostITs</b>
      </Link>
      <Link className="trash" to="/TrashBin">
        {result}
        {result2}
        <b>Trash Bin</b>
      </Link>
    </div>
  );
};

export default Header;
