import useStyles from "../Styles/LoginStyles.js";
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton
  // makeStyles
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";

//initial credentials
const initialCredentials = {
  username: "",
  password: ""
};

const initialHelperText = {
  username: "",
  password: ""
};

const LoginForm = () => {
  const { push } = useHistory();

  const classes = useStyles();
  //set state
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(initialCredentials);
  const [helperText, setHelperText] = useState(initialHelperText);

  const submitLogin = () => {
    axios.post('https://pintereach-03.herokuapp.com/api/auth/login', credentials)
    .then(res=>{
      console.log(res);
      localStorage.setItem("token", res.data.token);
      push('/manager');
    })
    .catch(err=>{
      console.log(err);
      // setError(err.message);
    });
  };

  //view pass
  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  //onChange -> use spread op
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  //onSubmit?
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // between 3-20 characters
      credentials.username.match(/^\w{3,20}$/g) &&
      credentials.password.match(/^[.\S]{3,20}$/g)
    ) {
      setCredentials(initialCredentials);
      submitLogin();
      console.log(credentials);
    } else {
      setCredentials(initialCredentials);
      setHelperText({
        username: "Invalid Username. Please try again.",
        password: "Invalid Password. Please try again."
      });
      return;
    }
  };

  const handleClick = () => {
    push('/register');
  };

  // inputs and submit buttons
  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Login
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={classes.paperItem}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Username"
                name="username"
                value={credentials.username}
                onChange={onChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={classes.paperItem}
                fullWidth
                required
                helperText={helperText.password}
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={onChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
              <Button
                className={classes.login}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={classes.paperItem}>
                Don't have an account?
            </Typography>
            <Button
              className={classes.paperItem}
              size="large"
              variant="outlined"
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default LoginForm;
