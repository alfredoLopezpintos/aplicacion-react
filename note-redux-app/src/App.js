import React from 'react';
import Notes from './Notes/Notes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AllNotes from './Notes/AllNotes';
import Papelera from './Notes/Papelera';
function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Switch>
                    <Route exact path="/allnotes">
                        <AllNotes />
                    </Route>
                    <Route exact path="/">
                        <Notes />
                    </Route>
                    <Route exact path="/Papelera">
                        <Papelera />
                    </Route>
                    <Route path="/">
                        <h1 >  page not found </h1>
                    </Route>  
                </Switch>
            </BrowserRouter>
        </div>
    );
}



export default App;
