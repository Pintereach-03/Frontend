//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

import axiosWithAuth from '../helpers/axiosWithAuth';

import Manager from '../Manager';

const PrivateRoute = () => {
    const [element, setElement] = useState();

    useEffect(() => {
        const isLogin = async () => {
            try {
                await axiosWithAuth().get('https://pintereach-03.herokuapp.com/api/articles');
                setElement(<Manager />)
            }catch(err) {
                setElement(<Redirect to="/login" />)
            }
        };
        isLogin();
    }, []);

    return(
        <div>
            {element}
        </div>
    )
}

export default PrivateRoute;
