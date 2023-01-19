import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import pic from "../assets/images/doctor.jpeg";
import axios from "../api/api";
import { db } from "../components/firebase";
import FolderIcon from "@mui/icons-material/Folder";

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
import { connect, useDispatch, useSelector } from "react-redux";

const VaccineDetails = () => {
  useEffect(() => {
    axios.get("getVaccine").then((data) => {
      console.log("ali", data?.data);
      setData(data?.data);
    });
  }, []);

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  const url = "https://www.w3schools.com/images/img_girl.jpg";
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
            Data
          </Typography>
          {/* <div
            onClick={() => {
              navigate("profile");
            }}
          >
            <Avatar sx={{ color: "red" }} src={url} />
          </div> */}
        </Toolbar>
      </AppBar>
      <Box style={{ padding: 10 }}>
        {data?.map((i) => {
          console.log("info", i);
          return (
            <ListItem sx={{ padding: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onClick={() => {
                  navigate("", { state: i });
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1d80e1" }}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                  sx={{
                    padding: 0,
                  }}
                  style={{ color: "#1d80e1" }}
                  primary={i.name}
                />
              </div>
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default VaccineDetails;
