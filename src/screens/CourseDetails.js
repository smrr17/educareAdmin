import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
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
import Axios from "axios";
import { db } from "../components/firebase";
import { connect, useDispatch } from "react-redux";
import FileViewer from "react-file-viewer";
const CourseDetails = (props) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(selectedFile);
  const url = "https://www.w3schools.com/images/img_girl.jpg";
  const { state } = useLocation();
  // console.log("courses", state);
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setRemoveValue(event.target.value);
    // event.target.value = null;
    // this.setState({ selectedFile: event.target.files[0] });
    // event.target.value = null;
    return () => {
      event.target.value = null;
    };
  };
  const userCourses = (data) => {
    dispatch({ type: "Course", payload: data });
  };
  const userProfile = (data) => {
    dispatch({ type: "SAVE_USER", payload: data });
  };
  const onFileUpload = async () => {
    const url = await uploadFile();
    setRemoveValue("");
    setSelectedFile("");
    let newArr = state.courseDocument;
    newArr.push({ url: url, fileName: selectedFile.name });

    axios
      .post(`editCourse/${state._id}`, {
        ...state,
        courseDocument: newArr,
        status: "selected",
      })
      .then(() => {
        const newCourses = props.courses.map((obj) => {
          return obj._id === state._id
            ? { ...obj, courseDocument: newArr, status: "selected" }
            : obj;
        });
        userCourses(newCourses);
        userProfile({
          ...props.user,
          courses: newCourses,
        });
        // console.log("object", newCourses);
        let newDta = { ...props.user, courses: newCourses };
        console.log("klk", newDta);
        axios
          .post("/facultyCourseUpdated", {
            newDta,
          })
          .then(() => {
            alert("uploaded");
          });
      });

    // setSelectedFile(null);
  };
  const [dense, setDense] = useState(false);
  const uploadFile = async () => {
    const date = new Date();
    const timeMil = date.getTime();
    const fileName =
      "file" + timeMil + Math.floor(100000 + Math.random() * 900000);
    try {
      const reference = db.ref(`images/${fileName}`);
      await reference.put(selectedFile);
      const url = reference.getDownloadURL();
      // console.log("url", url);
      return url;
    } catch (e) {
      // console.log('error', e);
    }
  };
  const fileData = () => {
    if (selectedFile) {
      // console.log("object", selectedFile);
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
  // console.log("stateeee", state.courseDocument);
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
            jii
          </Typography>
          {/* <div
            onClick={() => {
              //   navigate("profile");
            }}
          >
            <Avatar sx={{ color: "red" }} src={url} />
          </div> */}
        </Toolbar>
      </AppBar>
      <Box
        p={5}
        sx={{}}
        style={{
          height: "100vh",

          backgroundColor: "black",
        }}
        pt={3}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <input
              name="myFile"
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
              //   value={text}
              style={{
                backgroundColor: "white",
                marginRight: 4,
                borderRadius: 10,
                padding: 10,
                paddingInline: 44,
              }}
              onChange={(t) => {
                // console.log(t);
                // settext(t.target.value);
              }}
              type="text"
            />
            <Button
              onClick={() => {
                // setter();
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
        <Typography
          alignSelf={"center"}
          style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          File Information
        </Typography>
        <Box style={{ backgroundColor: "white" }}>{fileData()}</Box>
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
            Course Documents
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
            {/* {state?.courseDocument?.map((i) => {
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
                      primary={i.fileName}
                    />
                  </div>
                </ListItem>
              );
            })} */}
          </List>
        </Card>
        {/* <DocViewer
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
          }}
          documents={[
            {
              uri: "https://firebasestorage.googleapis.com/v0/b/e-voting-system-f7b9d.appspot.com/o/images%2Ffile1665777553758168378?alt=media&token=f3fb7361-8172-466f-b49c-6c3dd11a17ea",
            },
          ]}
          // pluginRenderers={DocViewerRenderers}
        /> */}
        {/* <FileViewer
          fileType={"pdf"}
          filePath={
            state?.courseDocument[1]?.url ? state?.courseDocument[0]?.url : ""
          }
          // onError={onError}
        /> */}
        {/* <iframe
          frameBorder={"0"}
          src={
            state?.courseDocument[1]?.url ? state?.courseDocument[1]?.url : ""
          }
          style={{ width: "100%", height: 500 }}
        ></iframe> */}
      </Box>
    </Box>
  );
};
function mapStateToProps({ reducer: { courses, user } }) {
  console.log("stateCourseRedux", user);

  return {
    courses,
    user,
  };
}
export default connect(mapStateToProps)(CourseDetails);
