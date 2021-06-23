import React, { Fragment } from "react";
// import "./styles.css";
import "./Styles/HomeStyles.css";
import { Route, Switch, Link } from "react-router-dom";
// import { connect } from "react-redux";

// IMPORT COMPONENTS
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Home from "./components/Home";

function App(props) {
  const logoutFunc = ()=> {
    window.localStorage.removeItem("token");
  };

  return (
    <Fragment>
      <header>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/manager">Manager</Link>
          {/* <Link to="/community">Community</Link> */}
          <Link to="/login">Login</Link>
          <Link to="/register">Sign up</Link>
          <Link to="/" onClick={logoutFunc}>Sign out</Link>
        </div>
      </header>

      <Switch>
        <Route exact path="/register" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/manager" component={PrivateRoute} />
        <Route exact path="/" component={Home} />
      </Switch>

      <footer>
        <h2> Copyright</h2>
        <address>
          Written by{" "}
          <a href="mailto:webmaster@example.com">
            {" "}
            Chelsea Ceballos, Ryan L. Spivey, Hugo Sanchez Orozco{" "}
          </a>
          .<br />
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

// const mapStateToProps = (state)=>{
//   return(state)
// }

// export default connect(mapStateToProps, {clearState})(App);
export default App;
