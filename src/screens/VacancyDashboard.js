import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import pic from "../assets/images/doctor.jpeg";
import {
  Grid,
  Box,
  Button,
  Card,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { connect, useDispatch } from "react-redux";
const VacancyDashboard = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  const url = "https://www.w3schools.com/images/img_girl.jpg";
  if (location.pathname === "/dashboard/profile") {
    return <Outlet />;
  }
  return (
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
            // sx={{ flexGrow: 1 }}
          >
            infomedica
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <div
            onClick={() => {
              navigate("profile");
            }}
          >
            <Avatar sx={{ color: "red" }} src={url} />
          </div>
        </Toolbar>
      </AppBar>
      <Box style={{ backgroundColor: "white" }}>
        <Box
          sx={{}}
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container sx={{ height: "85vh", padding: 2 }}>
            <Box
              p={10}
              lg={5}
              sm={6}
              mt={5}
              mb={4}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Button
                // onClick={onClick}
                style={{
                  display: "flex",
                }}
                sx={{
                  backgroundColor: "#2747c5",
                  border: 0,
                  borderRadius: 3,
                  color: "white",
                  height: 78,
                  width: "300px",
                  // alignSelf: "center",
                  marginTop: 10,
                  // marginBottom: 10,
                }}
              >
                Validation
              </Button>
              <Button
                // onClick={onClick}
                style={{
                  display: "flex",
                }}
                sx={{
                  backgroundColor: "#2747c5",
                  border: 0,
                  borderRadius: 3,
                  color: "white",
                  height: 78,
                  width: "300px",
                  // alignSelf: "center",
                  marginTop: 10,
                  // marginBottom: 8,
                }}
              >
                Result
              </Button>
            </Box>
            <Grid
              lg={7}
              sm={5}
              sx={{
                backgroundImage: `url(${pic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 10,
              }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default VacancyDashboard;
