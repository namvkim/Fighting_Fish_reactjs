import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./components/admin/adminPage/Admin";
import Home from "./components/user/homePage/Home";
import AboutUs from "./components/user/aboutUsPage/AboutUs";
import News from "./components/user/newsPage/News";
import SignUp from "./components/admin/signupPage/SignUp"
import Vertification from "./components/admin/vertificationPage/Vertification";
import Login from "./components/admin/loginPage/Login";
import Forget from "./components/admin/forgetPage/Forget"

function App(props) {
  const [token, setToken] = useState(true);
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}><Home /></Route>

        <Route path="/aboutUs" exact={true}><AboutUs /></Route>

        <Route path="/news" exact={true}><News /></Route>

        <Route path="/signUp" exact={true}><SignUp /></Route>

        <Route path="/vertification" exact={true}><Vertification /></Route>

        <Route path="/login" exact={true}><Login setToken={setToken} token={token} /></Route>

        <Route path="/forget" exact={true}><Forget /></Route>

        <Route path="/admin" exact={true}>
          {token ? <Admin /> : <Redirect to="/login" />}
        </Route>

      </Switch>

    </Router>
  );
}


export default App;
