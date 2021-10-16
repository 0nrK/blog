import React from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar"
import Login from "./components/Login"
import Register from "./components/Register"
import Addpost from "./components/AddPost"
import Home from "./components/Home"
import UserSettings from "./components/UserSettings"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './components/Posts';
import Article from './components/Article';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <Posts />
          <Sidebar />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/addpost">
          <Addpost/>
        </Route>
        <Route path="/usersettings">
          <UserSettings/>
        </Route>
        <Route path="/post/:postId">
          <Article/>
        </Route>
      </Switch>

    </Router>
  )
}

export default App
