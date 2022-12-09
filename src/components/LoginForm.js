import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Alert,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    borderBottomColor: "3px solid #1d80e1",
  },
  input: {
    color: "white",
  },
  floatingLabelFocusStyle: {
    color: "#1d80e1",
    borderBottomColor: "#1d80e1",
  },
}));
const LoginForm = ({
  value,
  data,
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  onClick,
}) => {
  console.log("homorh");
  console.log(value);
  let navigate = useNavigate();
  const classes = useStyles();
  console.log("hi", email, password, confirmPassword);

  const { floatingLabelFocusStyle } = classes;
  return (
    <>
      <Box sx={{ alignItems: "center", justifyContent: "center" }}>
        <Toolbar sx={{ justifyContent: "space-between", m: 0, p: 0 }}>
          <Typography
            style={{ color: "#1d80e1", fontSize: 24, fontWeight: "bold" }}
            variant="h4"
            component="div"
          >
            infomedica
          </Typography>
          <Typography
            style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
            variant="h4"
            component="div"
          >
            {value}
          </Typography>
        </Toolbar>
      </Box>
      <Box
        mt={3}
        // noValidate
        sx={{}}
        id="login-form"
        component={"form"}
        // style={{ display: "grid" }}
      >
        <Box
          mb={1}
          sx={{
            mb: 1,
            backgroundColor: "#1d80e120",
            // color: "#e8f0fe",
            borderRadius: 1,
          }}
        >
          <TextField
            className={classes.textField}
            style={{ color: "white" }}
            sx={{ color: "white" }}
            label="Email"
            required
            fullWidth
            type={"email"}
            variant="filled"
            id="email"
            name="email"
            value={email}
            onChange={setEmail}
            InputProps={{
              sx: {
                color: "black",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#1d80e1",
              },
            }}
          />
        </Box>
        <Box
          mb={1}
          sx={{
            mb: 1,
            backgroundColor: "#1d80e120",
            // color: "#e8f0fe",
            borderRadius: 1,
          }}
        >
          <TextField
            InputLabelProps={{
              style: {
                color: "#1d80e1",
              },
              sx: {
                borderBottomColor: "#1d80e1",
              },
            }}
            sx={{
              ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                color: "white",
                borderRadius: 5,
                backgroundColor: "red",
              },
            }}
            InputProps={{
              sx: {
                color: "black",

                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "2px solid white",
                },
                "&:hover": {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                },
              },
            }}
            label="Password"
            required
            fullWidth
            id="password"
            name="password"
            variant="filled"
            type={"password"}
            value={password}
            onChange={setPassword}
          />
        </Box>
        {data ? (
          <Box
            mb={1}
            sx={{
              mb: 1,
              backgroundColor: "#1d80e120",
              // color: "#e8f9fe",
              borderRadius: 1,
            }}
          >
            <TextField
              InputLabelProps={{
                style: {
                  color: "#1d80e1",
                },
                sx: {
                  borderBottomColor: "white",
                },
              }}
              sx={{
                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  color: "black",

                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                  },
                },
              }}
              label=" Confirm Password"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              variant="filled"
              type={"password"}
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          </Box>
        ) : null}
        <Button
          onClick={onClick}
          style={{
            alignSelf: "center",
            display: "flex",
          }}
          sx={{
            backgroundColor: "#2747c5",
            border: 0,
            borderRadius: 3,
            color: "white",
            height: 48,
            width: "300px",
            alignSelf: "center",
            marginTop: data ? 1 : 3,
            marginBottom: 8,
          }}
        >
          {value}
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
