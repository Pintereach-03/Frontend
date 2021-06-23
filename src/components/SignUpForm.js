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

const initialValues = {
  username: "",
  password: ""
};

const SignUpForm = () => {
  const { push } = useHistory();

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState(initialValues);

  const submitSignup = () => {
    axios.post('https://pintereach-03.herokuapp.com/api/auth/register', credentials)
    .then(res=>{
      console.log(res);
      push('/login');
    })
    .catch(err=>{
      console.log(err);
      // setError(err.message);
    });
  };

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username.match(/^\w{5,11}$/g) &&
      credentials.password.match(/^[.\S]{7,15}$/g)
    ) {
      submitSignup();
      console.log(credentials);
    }
    return;
  };

  const handleClick = () => {
    push('/login');
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Sign Up
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={classes.paperItem}
                fullWidth
                required
                error={
                  credentials.username !== "" &&
                  !credentials.username.match(/^\w{5,11}$/g)
                }
                helperText={
                  credentials.username !== "" &&
                  !credentials.username.match(/^\w{5,11}$/g)
                    ? "Required: 5-11 characters, no special characters (except underscore), no spaces"
                    : ""
                }
                type="text"
                label="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
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
                error={
                  credentials.password !== "" &&
                  !credentials.password.match(/^[.\S]{7,15}$/g)
                }
                helperText={
                  credentials.password !== "" &&
                  !credentials.password.match(/^[.\S]{7,15}$/g)
                    ? "Required: 7-15 characters, special characters allowed, no spaces"
                    : ""
                }
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
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
                className={classes.signUp}
                size="large"
                variant="contained"
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={classes.paperItem}>
              Already have an account?
            </Typography>
            <Button
              className={classes.paperItem}
              size="large"
              variant="outlined"
              onClick={handleClick}
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default SignUpForm;
