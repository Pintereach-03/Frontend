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

//initial values
const initialValues = {
  username: "",
  password: ""
};

const initialHelperText = {
  username: "",
  password: ""
};

const LoginForm = () => {
  const classes = useStyles();
  //set state
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(initialHelperText);

  //view pass
  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  //onChange -> use spread op
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //onSubmit?
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // between 3-20 characters
      values.username.match(/^\w{3,20}$/g) &&
      values.password.match(/^[.\S]{3,20}$/g)
    ) {
      setValues(initialValues);
      console.log(values);
    } else {
      setValues(initialValues);
      setHelperText({
        username: "Invalid Username. Please try again.",
        password: "Invalid Password. Please try again."
      });
      return;
    }
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
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Username"
                name="username"
                value={values.username}
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
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.password}
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
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
                className={`${classes.login}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default LoginForm;