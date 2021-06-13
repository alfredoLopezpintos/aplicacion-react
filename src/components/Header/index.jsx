import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import './Header.css';

export const Header = () => (
  <div className="header">
    <Link className="home" to="/">
      <b>PostITs</b>
    </Link>
    <Link className="trash" to="/TrashBin">
      <MdDelete className="trashIcon" />
      <b>Trash Bin</b>
    </Link>
  </div>
);

export default Header;
