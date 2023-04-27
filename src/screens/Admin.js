import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import pic from "../assets/images/doctor.jpeg";
import axios from "../api/api";
import { db } from "../components/firebase";

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
import FolderIcon from "@mui/icons-material/Folder";
import { withRouter } from "../components/withRouter";

// function Admin(props) {
class Admin extends React.Component {
  state = {
    data: [],
  };
  //   const dispatch = useDispatch();
  //   let location = useLocation();
  //   let navigate = useNavigate();
  //   const [data, setData] = useState([]);
  componentDidMount() {
    this.getAllData();
    this.getLoggeduser();
  }

  getAllData = async () => {
    axios.get("/getVaccineForm").then((res) => {
      console.log(res?.data, "ioi");
      if (typeof res?.data === "object") {
        this.setState({ data: res?.data });
      }
    });
  };
  //   useEffect(() => {
  //     // console.log("jiih");
  //     getLoggeduser();
  //     axios.get("getVaccine").then((data) => {
  //         console.log("ali", data?.data);
  //         setData(data?.data);
  //       });

  //     axios.get("getVaccine").then((data) => {
  //       console.log("ali", data?.data);
  //       setData(data?.data);
  //     });
  //     return () => {
  //       axios.get("getVaccine").then((data) => {
  //         console.log("ali", data?.data);
  //         setData(data?.data);
  //       });
  //     };
  //   }, []);

  //   const arrData = () => {
  //     let arr = [];
  //     axios.get("getVaccine").then((data) => {
  //       console.log("ali", data?.data);
  //       arr.push(...data?.data);
  //       console.log(arr, "arr");
  //       setData(arr);
  //     });
  //     return arr;
  //   };
  getLoggeduser = () => {
    // console.log("chal");
    axios.get("/loggeduser").then((res) => {
      console.log("all user", typeof res?.data?.user);
      //   setUser(res.data.user);
      // this.setState({ user: res.data.user });
      if (typeof res?.data?.user === "object") {
        this.props.userProfile(res?.data?.user);
      }
    });
  };
  //    userProfile = (data) => {
  //     dispatch({ type: "SAVE_USER", payload: data });
  //   };

  render() {
    const { data } = this.state;
    console.log("object", data);
    console.log("object", typeof data);
    const url = "https://www.w3schools.com/images/img_girl.jpg";
    if (this.props.location.pathname === "/adminDashboard/profile") {
      return <Outlet />;
    }
    if (this.props.location.pathname === "/adminDashboard/validation") {
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
                this.props.navigate("profile");
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
              // justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Grid
              container
              sx={{ height: "85vh", padding: 2, alignSelf: "flex-end" }}
            >
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
              <Box style={{ padding: 10, flex: 1 }}>
                {typeof data === "object" &&
                  this.state?.data?.map((i) => {
                    console.log("info", i);
                    return (
                      <ListItem sx={{ padding: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            //   flexDirection: "row",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            this.props.navigate("validation", { state: i });
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
            </Grid>
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
function mapStateToProps({ reducer: { courses, user } }) {
  console.log("user", user);

  return {
    courses,
    user,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
