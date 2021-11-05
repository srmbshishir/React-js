import React from 'react';
import './App.css';
import AddStudent from "./component/AddStudent";
import ShowStudent from "./component/ShowStudent";
import Edit from "./component/Edit";
import Delete from "./component/Delete";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div>

    <BrowserRouter>
        <Switch>
            <Route exact path='/create-student' component={AddStudent} />
            <Route exact path='/show-student' component={ShowStudent} />
            <Route exact path='/student/edit/:id' component={Edit} />
            <Route exact path='/student/delete/:id' component={Delete} />
        </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
