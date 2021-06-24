import React, { Fragment, useEffect, useState } from "react";
// import "./styles.css";
import "./Styles/HomeStyles.css";
import { Route, Switch, Link } from "react-router-dom";
// import { connect } from "react-redux";

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Home from "./components/Home";

function App(props) {
 

  return (
    <Fragment>
      
      <Navbar />

      <Switch>
        <Route exact path="/register" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/manager" component={PrivateRoute} />
        <Route exact path="/" component={Home} />
      </Switch>

      <footer>
        <h2> Copyright</h2>
        <br />
        <address>
          <p>
          Written by
            Chelsea Ceballos, Ryan L. Spivey, Hugo Sanchez Orozco{" "}
          </p>
          
          Visit us at: <br />
          Example.com
          <br />
          123 Washington Street
          <br />
          CA, USA
        </address>
      </footer>
    </Fragment>
  );
}

export default App;
