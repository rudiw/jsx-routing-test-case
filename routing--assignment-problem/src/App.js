import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/users"
                    exact
                    activeClassName="my-active"
                      activeStyle={{
                          color: '#fa923f',
                          textDecoration: 'underline'
                      }}>Users
                  </NavLink>
                </li>
                <li>  
                  <NavLink
                    to="/courses"
                    exact>
                    Courses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/users" exact component={Users}></Route>
            <Route path="/courses" component={Courses}></Route>
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>

        
      </BrowserRouter>
    );
  }
}

export default App;
