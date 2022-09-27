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
import Picker from "react-picker";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
const AdminHome = () => {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  console.log(selectedFile);

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
    setSelectedFile("");
    alert("uploaded");

    console.log("ji");

    // setSelectedFile(null);
    // axios.post("api/uploadfile", formData);
  };
  const [dense, setDense] = useState(false);
  const [data, setData] = useState([
    {
      value: "information Security",
    },
    {
      value: "Final Year Project",
    },
    {
      value: "Softwear Engineering",
    },
    {
      value: "Critical Thinking",
    },
    {
      value: "Software Quality Assurance",
    },
    {
      value: "Digital Logic Design",
    },
    {
      value: "Artificial intelligence",
    },
  ]);
  const [text, settext] = useState("");
  const setter = () => {
    let arr = [];
    arr.push(...data, { value: text });
    setData(arr);
    settext("");
  };
  const fileData = () => {
    if (selectedFile) {
      return (
        <div
          style={{
            backgroundColor: "#191c24",
            paddingInline: 15,
            borderRadius: 10,
            paddingBottom: 5,
          }}
        >
          <h2 style={{ color: "#00f700" }}>File Details:</h2>
          <p style={{ color: "white" }}>File Name: {selectedFile.name}</p>
          <p style={{ color: "white" }}>File Type: {selectedFile.type}</p>
          <p style={{ color: "white" }}>
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "#191c24",
            borderRadius: 10,
            padding: 5,
            marginTop: 15,
          }}
        >
          <h4
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "#a04848",
              // textShadow: "inherit",
              // boxShadow: "initial",
            }}
          >
            Choose before Pressing the Upload button
          </h4>
        </div>
      );
    }
  };
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
              navigate("/profile");
            }}
          >
            <Avatar sx={{ color: "blue" }} />
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
        {fileData()}
        <Card
          sx={{
            backgroundColor: "black",
            height: "100vh",
            p: 2,
            borderRadius: 0,
          }}
        >
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
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
            </Box>
            <Box style={{ flex: 1 }}>
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                style={{ alignSelf: "center" }}
                sx={{ color: "#00f700" }}
                align={"center"}
              >
                Faculty Registration
              </Typography>
              <Card
                style={{
                  marginTop: 8,
                  overflow: "auto",
                  backgroundColor: "#191c24",
                  height: "40vh",
                  borderRadius: 14,
                  padding: 10,
                  overflowY: "scroll",
                  marginLeft: 10,
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="First Name"
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                      flex: 1,
                    }}
                  />
                  <input
                    type={"text"}
                    placeholder="Last Name"
                    style={{
                      flex: 1,
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                    }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    type={"text"}
                    placeholder="Username"
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                      flex: 1,
                    }}
                  />
                  <div>
                    <Picker
                      ref="fruitSelection"
                      value={"ggg"}
                      options={[
                        "Mango",
                        "Orange",
                        "Avocado",
                        "Pineapple",
                        "Jack Fruit",
                        "Durian",
                        "Apricot",
                        "Carambola",
                        "Dateplum Persimmon",
                        "Megranate",
                      ]}
                      onChange={(e) => {
                        console.log(e);
                      }}
                    >
                      {/* <OptionBox value={"picker"} onClick={() => {}} /> */}
                    </Picker>
                  </div>
                  {/* <input
                    type={""}
                    placeholder="courses"
                    style={{
                      flex: 1,
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                    }} */}
                  {/* /> */}
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    type={"email"}
                    placeholder="Email"
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                      flex: 1,
                    }}
                  />
                  <input
                    required={true}
                    type={"password"}
                    placeholder="Password"
                    style={{
                      flex: 1,
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                    }}
                  />
                </Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    onClick={() => {
                      navigate("");
                    }}
                    style={{}}
                    sx={{
                      backgroundColor: "#00f700",
                      borderRadius: 3,
                      color: "white",
                      height: 48,
                      width: "289px",
                      mt: 2,
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Card>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AdminHome;
