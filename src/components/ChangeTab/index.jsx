import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default function index() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/TrashBin">Trash Bin</NavLink></li>
        </ul>
      </div>
    </BrowserRouter>
  );
}
