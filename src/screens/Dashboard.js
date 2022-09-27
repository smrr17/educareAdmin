import { useNavigate, useLocation, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
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
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  console.log(selectedFile);
  let location = useLocation();
  console.log("location", location);
  // const { item } = location?.state;

  const userProfile = (data) => {
    // console.log('asdssssszzxx', data);
    dispatch({ type: "SAVE_USER", payload: data });
  };

  const onFileChange = (event) => {
    // Update the state
    // console.log(event);
    setSelectedFile(event.target.files[0]);
    setRemoveValue(event.target.value);
    // event.target.value = null;
    // this.setState({ selectedFile: event.target.files[0] });
    // event.target.value = null;
    return () => {
      event.target.value = null;
    };
  };
  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);
    console.log("hi", formData);
    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    console.log("ooo");
    setRemoveValue("");
    alert("uploaded");

    console.log("ji");

    // setSelectedFile(null);
    // axios.post("api/uploadfile", formData);
  };

  const [data, setData] = useState([
    {
      value: "nomi",
    },
    {
      value: "nomi",
    },
    {
      value: "nomi",
    },
    {
      value: "nomi",
    },
    {
      value: "nomi",
    },
  ]);
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  useEffect(() => {
    // axios.get("/getUsers").then((e) => {
    //   setUser(e.data);
    //   console.log("fdf", e.data);
    // });
    console.log("jiih");
    getLoggeduser();
  }, []);
  const getLoggeduser = () => {
    console.log("chal");
    axios.get("/loggedFaculty").then((res) => {
      console.log(res.data.user, "user");
      setUser(res.data.user);
      // this.setState({ user: res.data.user });
      userProfile(res.data.user);
    });
  };

  const url = "https://www.w3schools.com/images/img_girl.jpg";
  console.log(data);
  const [text, settext] = useState("");
  console.log(text);
  let arr = ["shah", "name"];
  let navigate = useNavigate();
  const setter = () => {
    let arr = [];
    arr.push(...data, { value: text });
    setData(arr);
    settext("");
  };
  // const email = 124;
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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <input
              value={removeValue}
              onChange={onFileChange}
              style={{
                backgroundColor: "white",
                marginRight: 4,
                borderRadius: 10,
                padding: 10,
              }}
              type="file"
            />
            <Button
              onClick={onFileUpload}
              style={{
                backgroundColor: "#00f700",
                padding: 8,
                borderRadius: 8,
                paddingInline: 20,
              }}
              variant="contained"
              component="label"
            >
              upload
            </Button>
          </Box>
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
                console.log(t);
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
            {data.map((i) => {
              return (
                <ListItem sx={{ padding: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      navigate("/");
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
                      primary={i.value}
                    />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Card>
        {fileData()}
      </Box>
    </Box>
  );
};
export default Dashboard;
