import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import './ChangeTab.css';

export default function index() {
  return (
    <BrowserRouter>
      <div>
        <ul className="all">
          <li><Link className="link" to="/">Home</Link></li>
          <li>
            <MdDelete />
            <Link className="link" to="/TrashBin">Trash Bin</Link>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
}
