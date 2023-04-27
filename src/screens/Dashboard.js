import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
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
import axios from "../api/api";
import { connect, useDispatch } from "react-redux";

const Dashboard = (props) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  let location = useLocation();
  const userProfile = (data) => {
    dispatch({ type: "SAVE_USER", payload: data });
  };
  const userCourses = (data) => {
    dispatch({ type: "Course", payload: data });
  };
  useEffect(() => {
    // console.log("jiih");
    getLoggeduser();
  }, [props.user]);
  const getLoggeduser = () => {
    // console.log("chal");
    axios.get("/loggedFaculty").then((res) => {
      console.log(res.data.user, "user");
      setUser(res.data.user);
      // this.setState({ user: res.data.user });
      userProfile(res.data.user);
    });
  };

  const url = "https://www.w3schools.com/images/img_girl.jpg";

  const [text, settext] = useState("");
  // console.log(text);
  let navigate = useNavigate();
  const setter = () => {
    // let arr = [];
    // arr.push(...data, { value: text });
    // setData(arr);
    // settext("");
  };

  const [dense, setDense] = useState(false);
  // function generate(element: React.ReactElement) {
  //   return data.map((value) => {
  //     const app = React.cloneElement(element, {
  //       name: value.value,
  //     });
  //     console.log(app);
  //     return React.cloneElement(element, {
  //       key: value,
  //     });
  //   });
  // }
  if (location.pathname === "/dashboard/courseDetails") {
    return <Outlet />;
  }
  if (location.pathname === "/dashboard/profile") {
    return <Outlet />;
  }

  // const findUser = (email) => {
  //   const newUser = user;
  //   return newUser.some((e) => e.email === email);
  // };
  // if (true) {
  //   return <AdminDashboard />;
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "#00f700" }}
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
            Educare
          </Typography>
          <Typography
            style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
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
      <Box
        p={5}
        sx={{}}
        style={{
          height: "90vh",

          backgroundColor: "black",
        }}
        pt={3}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Box>
            <input
              value={text}
              style={{
                backgroundColor: "white",
                marginRight: 4,
                borderRadius: 10,
                padding: 10,
                paddingInline: 44,
              }}
              onChange={(t) => {
                // console.log(t);
                settext(t.target.value);
              }}
              type="text"
            />
            <Button
              onClick={() => {
                setter();
              }}
              style={{
                backgroundColor: "#00f700",
                padding: 8,
                borderRadius: 8,
                paddingInline: 20,
              }}
              variant="contained"
              component="label"
            >
              search
            </Button>
          </Box>
        </Toolbar>

        <Card
          sx={{
            backgroundColor: "black",
            height: "79vh",
            marginTop: 2,
            p: 2,
          }}
        >
          <Typography
            fontSize={24}
            fontWeight={"bold"}
            sx={{ color: "#00f700" }}
          >
            Courses
          </Typography>
          <List
            style={{
              marginTop: 8,
              overflow: "auto",
              backgroundColor: "#191c24",
              height: "30vh",
              borderRadius: 14,
              // paddingTop: 5,
              padding: 10,
            }}
            dense={dense}
          >
            {user?.courses?.map((i) => {
              return (
                <ListItem sx={{ padding: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      navigate("courseDetails", { state: i });
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#00f700" }}>
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
                      style={{ color: "white" }}
                      primary={i.courseName}
                    />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </Box>
    </Box>
  );
};
function mapStateToProps({ reducer: { courses, user } }) {
  console.log("user", user);

  return {
    courses,
    user,
  };
}
export default connect(mapStateToProps)(Dashboard);
