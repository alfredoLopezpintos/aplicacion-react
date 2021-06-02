import React, { Component } from 'react';
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';
import { Link } from "react-router-dom";

export default class Notes extends Component {
  render() {
    return (
      <>
        <h1>React Redux Notes App</h1>
            <Link to="/allnotes">
                <h2>allnotes</h2>
            </Link>
            <Link to="/Papelera">
                <h2>Papelera</h2>
            </Link>
        <NotesForm />
        <hr />

      </>
    );
  }
}
