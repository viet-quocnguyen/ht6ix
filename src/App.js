import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <div className="container">
          <div><Navbar /></div>
          <div className="main">
            <Switch>
              <Route exact path="/">
                <p>Dashboard</p>
              </ Route>
              <Route path="/lessons" >
                <p>Lesson List here</p>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
