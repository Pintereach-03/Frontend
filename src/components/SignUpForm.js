import useStyles from "../Styles/LoginStyles.js";
import React, { useState } from "react";
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
import PhoneIcon from "@material-ui/icons/Phone";

const initialValues = {
  username: "",
  password: "",
  phoneNumber: ""
};

const SignUpForm = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.username.match(/^\w{5,11}$/g) &&
      values.password.match(/^[.\S]{7,15}$/g) &&
      values.phoneNumber.match(/^[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{4}$/s)
    ) {
      console.log(values);
    }
    return;
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
              Sign-Up
            </Typography>
            <Typography
              variant="h6"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              New user
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  values.username !== "" &&
                  !values.username.match(/^\w{5,11}$/g)
                }
                helperText={
                  values.username !== "" &&
                  !values.username.match(/^\w{5,11}$/g)
                    ? "Required: 5-11 characters, no special characters (except underscore), no spaces"
                    : ""
                }
                type="text"
                label="Username"
                name="username"
                value={values.username}
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
                className={`${classes.paperItem}`}
                fullWidth
                required
                error={
                  values.password !== "" &&
                  !values.password.match(/^[.\S]{7,15}$/g)
                }
                helperText={
                  values.password !== "" &&
                  !values.password.match(/^[.\S]{7,15}$/g)
                    ? "Required: 7-15 characters, special characters allowed, no spaces"
                    : ""
                }
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
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
                className={`${classes.signUp}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Sign-Up
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={`${classes.paperItem}`}>
              Already have an account?
            </Typography>
            <Button
              className={`${classes.paperItem}`}
              size="large"
              variant="outlined"
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