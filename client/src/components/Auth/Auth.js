import React, { useEffect, useState } from "react";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import makeStyles from "./styles";
import Input from "./input";
import Icon from "./icon";

const Auth = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [isSignUp, setIsSignup] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    console.log("changed!!!");
  };

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = res?.profileObj;
    const token = res?.token;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google failure!!! Try Again Later");
  };

  const clientId =
    "628036439862-lm876r8a68pm0otbovdm4mijgd2789nu.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  halfWidth
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  handleChange={handleChange}
                  halfWidth
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
            variant="contained"
          >
            {isSignUp ? "Sign up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify-content="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
