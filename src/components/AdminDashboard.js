import React, { useState, useEffect, Component } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

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
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
// import facultyRegistration from "./FacultyRegistration";
import axios from "../api/api";
import { withRouter } from "./withRouter";
import { connect } from "react-redux";

class AdminDashboard extends Component {
  state = {
    courses: [],
    faculty: [],
    data: [],
    dense: false,
    user: null,
  };

  // const [courses, setCourses] = useState([]);
  // const [faculty, setFaculties] = useState([]);
  // console.log("cou", courses);
  // const [dense, setDense] = useState(false);
  // const [data, setData] = useState([
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  //   {
  //     value: "nomi",
  //   },
  // ]);
  // useEffect(() => {
  //   getAllCourses();
  //   getAllFaculty();
  // }, []);

  componentDidMount() {
    this.getAllCourses();
    this.getAllFaculty();
    this.getLoggeduser();
    // console.log("object", this.props.location.state.item.length);
  }

  getLoggeduser = () => {
    axios.get("/loggeduser").then((res) => {
      console.log(res.data.user, "user");
      this.setState({ user: res.data.user });
      this.props.userProfile(res.data.user);
    });
  };
  getAllCourses = async () => {
    axios.get("/getCourses").then((res) => {
      this.setState({ courses: res.data });
      console.log(res);
    });
  };
  getAllFaculty = () => {
    axios.get("/getAllFaculty").then((res) => {
      this.setState({ faculty: res.data });
      console.log("res", res);
    });
  };

  // let navigate = useNavigate();
  render() {
    const { data, dense, faculty, courses } = this.state;
    // console.log("object", faculty);
    if (this.props.location.pathname === "/adminDashboard/profile") {
      return <Outlet />;
    }
    if (
      this.props.location.pathname === "/adminDashboard/facultyRegistration"
    ) {
      return <Outlet />;
    }
    if (this.props.location.pathname === "/adminDashboard/facultyCourses") {
      return <Outlet />;
    }
    return (
      <Box>
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
              Admin
            </Typography>
            <div
              onClick={() => {
                this.props.navigate("profile");
              }}
            >
              <Avatar sx={{ color: "blue" }} />
            </div>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            backgroundColor: "black",
          }}
          height={"95vh"}
        >
          <Box
            sx={{
              backgroundColor: "black",
              alignItems: "center",
              display: "flex",
              justifyContent: "centers",
            }}
          >
            <Box
              sx={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-evenly",
                display: "flex",
                mt: 5,
              }}
            >
              <Button
                onClick={() => {
                  this.props.navigate("facultyCourses");
                }}
                sx={{
                  backgroundColor: "#00f700",
                  border: 0,
                  borderRadius: 3,
                  color: "white",
                  height: 88,
                  width: "289px",
                }}
              >
                Add Courses Here
              </Button>
              <Button
                onClick={() => {
                  this.props.navigate("facultyRegistration");
                }}
                sx={{
                  backgroundColor: "#00f700",
                  border: 0,
                  borderRadius: 3,
                  color: "white",
                  height: 88,
                  width: "289px",
                }}
              >
                Add Faculty Here
              </Button>
            </Box>
          </Box>
          <Box
            mt={10}
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              marginInline: 40,
            }}
          >
            <Box style={{ flex: 1 }}>
              <Typography
                align={"center"}
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
                  height: "40vh",
                  borderRadius: 14,
                  // paddingTop: 5,
                  padding: 10,
                  marginRight: 10,
                }}
                dense={dense}
              >
                {courses?.map((i) => {
                  return (
                    <ListItem sx={{ padding: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",

                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            this.props.navigate("/");
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
                        <div
                          onClick={() => {
                            console.log("ids", i._id);
                            axios
                              .delete(`/deleteCourse/${i._id}`)
                              .then((res) => {
                                console.log("response", res.data);
                                alert(res.data.message);
                                this.getAllCourses();
                              });
                          }}
                        >
                          <Avatar sx={{ bgcolor: "#00f700" }}>
                            <DeleteIcon />
                          </Avatar>
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box style={{ flex: 1 }}>
              <Typography
                align={"center"}
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700" }}
              >
                Faculties
              </Typography>
              <List
                style={{
                  marginTop: 8,
                  overflow: "auto",
                  backgroundColor: "#191c24",
                  height: "40vh",
                  borderRadius: 14,
                  // paddingTop: 5,
                  padding: 10,
                  marginRight: 10,
                }}
                dense={dense}
              >
                {faculty.map((i) => {
                  return (
                    <ListItem sx={{ padding: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            this.props.navigate("/");
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
                            primary={i.firstName}
                          />
                        </div>
                        <div
                          onClick={() => {
                            console.log("ids", i._id);
                            axios
                              .delete(`/deleteFaculty/${i._id}`)
                              .then((res) => {
                                console.log("response", res.data);
                                alert(res.message);
                                this.getAllFaculty();
                              });
                          }}
                        >
                          <Avatar sx={{ bgcolor: "#00f700" }}>
                            <DeleteIcon />
                          </Avatar>
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userProfile: (data) => {
      // console.log('asdssssszzxx', data);
      dispatch({ type: "SAVE_USER", payload: data });
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(AdminDashboard));
