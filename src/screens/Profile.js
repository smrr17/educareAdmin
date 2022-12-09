import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  TextField,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { NoEncryption } from "@mui/icons-material";
import { connect, useDispatch } from "react-redux";
import axios from "../api/api";

const Profile = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(props.user?.name ? props.user?.name : "");
  const [email, setEmail] = useState(props.user?.email);
  const [fname, setFname] = useState(
    props.user?.fname ? props.user?.fname : ""
  );
  const [username, setUsername] = useState(
    props.user?.username ? props.user?.username : ""
  );
  const [address, setAddress] = useState(
    props.user?.address ? props.user?.address : ""
  );
  const [contact, setContact] = useState(
    props.user?.contact ? props.user?.contact : ""
  );
  const updatedProfile = () => {
    if (
      name === props.user.name &&
      fname === props.user.fname &&
      contact === props.user.contact &&
      address === props.user.address &&
      username === props.user.username
    ) {
      return alert("Make Some Changes");
    }
    if (name || fname || contact || username || address || contact) {
      axios
        .post("/updateProfile", { name, fname, username, address, contact })
        .then(() => {
          alert("Profile Updated");
          userProfile({
            ...props.user,
            name,
            fname,
            username,
            address,
            contact,
          });
          navigate("/adminDashboard");
        });
    } else {
      alert("Make Some Changes");
    }
  };
  const facultyProfile = () => {
    if (
      name === props.user.name &&
      fname === props.user.fname &&
      contact === props.user.contact &&
      address === props.user.address &&
      username === props.user.username
    ) {
      return alert("Make Some Changes");
    }
    if (name || fname || contact || username || address || contact) {
      axios
        .post("/facultyUpdated", { name, fname, username, address, contact })
        .then((res) => {
          console.log("object,res", res);
          alert("Profile faculty Updated");
          userProfile({
            ...props.user,
            name,
            fname,
            username,
            address,
            contact,
          });
          navigate("/adminDashboard");
        });
    } else {
      alert("Make Some Changes");
    }
  };
  const userProfile = (data) => {
    // console.log('asdssssszzxx', data);
    return dispatch({ type: "SAVE_USER", payload: data });
  };
  const setUser = (data) => {
    return dispatch({
      type: "isLogin",
      payload: data,
    });
  };
  const setAdmin = (data) => {
    return dispatch({
      type: "isLoginAdmin",
      payload: data,
    });
  };
  const setFaculty = (data) => {
    return dispatch({
      type: "isLoginFaculty",
      payload: data,
    });
  };
  const logout = () => {
    setUser(false);
    // setAdmin(false);
    // setFaculty(false);
    userProfile(null);
    navigate("/", { replace: true });
  };
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
          <Button sx={{ color: "white" }} onClick={logout}>
            logout
            <LogoutIcon sx={{ marginLeft: 0.5, color: "white" }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{
          backgroundColor: "#1d80e140",
          height: "90vh",
          p: 2,
        }}
      >
        <div
          style={{
            marginTop: 150,
            alignItems: "center",
          }}
        >
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                Name:
              </Typography>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                F-Name:
              </Typography>
              <input
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                value={fname}
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                Username:
              </Typography>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                Email:
              </Typography>
              <input
                contentEditable={false}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                Address:
              </Typography>
              <input
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#1d80e1", width: "25%" }}
              >
                Contact:
              </Typography>
              <input
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                value={contact}
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#1d80e1",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              onClick={
                props.isLoginFaculty
                  ? facultyProfile
                  : props.isLoginAdmin
                  ? updatedProfile
                  : () => {
                      alert("wrong click");
                    }
              }
              style={{}}
              sx={{
                backgroundColor: "#1d80e1",

                borderRadius: 3,
                color: "white",
                height: 48,
                width: "289px",

                marginTop: 10,
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Card>
    </Box>
  );
};
function mapStateToProps({ reducer: { user, isLoginFaculty, isLoginAdmin } }) {
  console.log("asaad", user, isLoginFaculty, isLoginAdmin);

  return {
    user,
    isLoginFaculty,
    isLoginAdmin,
  };
}
export default connect(mapStateToProps)(Profile);
