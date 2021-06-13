import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import './ChangeTab.css';

export const ChangeTab = () => (
  <div>
    <ul className="all">
      <Link className="link" to="/">
        <li>Home</li>
      </Link>
      <Link className="link" to="/TrashBin">
        <li>
          <MdDelete />
          Trash Bin
        </li>
      </Link>
    </ul>
  </div>
);

export default ChangeTab;
