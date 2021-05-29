import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Navbar from "./components/static/Navbar";
import { checkToken } from "./utils/checkToken";
import {changeLogin} from "./redux/actions/login.action"

function ProtectRoute({ children, ...rest }) {
  const loginReducer = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const isLoing = () => {
    if (loginReducer.status !== true) {
      checkToken((err, result) => {
        dispatch(changeLogin(result));
      });
    }
  };

  useEffect(() => {
    isLoing()
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        loginReducer.status? children : <Redirect to="/login" />
      }
    />
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectRoute path="/profile">
            <Profile />
          </ProtectRoute>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
