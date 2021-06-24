import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  
    const logoutFunc = ()=> {
      window.localStorage.removeItem("token");
    };

    return(
        <header>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/manager">Manager</Link>
                {/* <Link to="/community">Community</Link> */}
                <Link to="/login">Login</Link>
                <Link to="/register">Sign up</Link>
                <Link to="/login" onClick={logoutFunc}>Sign out</Link>
            </div>
        </header>
    );
}

export default Navbar;