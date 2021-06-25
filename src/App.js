import React, { Fragment, useEffect, useState } from "react";
// import "./styles.css";
import "./Styles/HomeStyles.css";
import { Route, Switch } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Home from "./components/Home";
import Land from "./components/Land";
import Error from "./components/Error";

function App(props) {
  const [isLogin, setIsLogin] = useState();

  const checkForToken = () => {
    if(window.localStorage.getItem("token"))
      setIsLogin(true);
    else
      setIsLogin(false);
  };

  useEffect(() => {
    checkForToken();
  }, []);

  return (
    <Fragment>

      <Navbar isLogin={isLogin} checkForToken={checkForToken} />

      <Switch>
        <Route exact path="/register" render={() => <SignUpForm />} />
        <Route exact path="/login" onClick={checkForToken} render={() => <LoginForm checkForToken={checkForToken}/>} />
        <Route exact path="/manager" render={() => <PrivateRoute />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Land} />
        <Route path="/*" component={Error}/>
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
