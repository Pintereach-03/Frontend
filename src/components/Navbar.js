import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    //get props
    const { isLogin, checkForToken } = props;
  
    const logoutFunc = ()=> {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("userId");
        checkForToken();
    };

    return(
        <header>
            <div className="menu">
                <Link to="/">HOME</Link>
                {/* <Link to="/community">Community</Link> */}
                { isLogin ?  <Link to="/manager">MANAGER</Link> : null }
                { !isLogin ? <Link to="/login">LOGIN</Link> : null }
                { !isLogin ? <Link to="/register">SIGN UP</Link> : null }
                { isLogin ?  <Link to="/" onClick={logoutFunc}>SIGN OUT</Link> : null }
                
            </div>
        </header>
    );
}

export default Navbar;