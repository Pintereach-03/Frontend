import React, { Fragment, useEffect, useState } from "react";
// import "./styles.css";
import "./Styles/HomeStyles.css";
import { Route, Switch } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

      <Footer />
    </Fragment>
  );
}

export default App;
