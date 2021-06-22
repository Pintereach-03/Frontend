// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import "./styles.css";
import "./Styles/HomeStyles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { connect } from "react-redux";

// IMPORT COMPONENTS
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";

function App(props) {
  // const logoutFunc = ()=> {
  //   window.localStorage.removeItem("token");
  //   props.clearState();
  // }
  return (
    <div className="Nav">
      <Router>
        <header>
          <div className="menu">
            <Link to="/">Home</Link>
            {/* <Link to="/community">Community</Link> */}
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>
            {/* onClick={logoutFunc} */}
            <Link to="/">Sign out</Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/sign-up" component={SignUpForm} />

          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

// const mapStateToProps = (state)=>{
//   return(state)
// }

// export default connect(mapStateToProps, {clearState})(App);
export default App;
