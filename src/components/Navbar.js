import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "#1d80e1" }}
          position="static"
          color="default"
        >
          <Toolbar>
            <Typography
              style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Infomedica
            </Typography>
            <Button
              sx={{ color: "white", textTransform: "capitalize" }}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#2747c5" : "",
              })}
              component={NavLink}
              to="/"
            >
              Signin
            </Button>
            <Button
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#2747c5" : "",
              })}
              sx={{ color: "white", textTransform: "capitalize" }}
              component={NavLink}
              to="/signup"
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
