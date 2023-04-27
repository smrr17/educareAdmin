import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import pic from "../assets/images/doctor.jpeg";
import axios from "../api/api";
import { db } from "../components/firebase";
import Axios from "axios";

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

const VacancyDashboard = (props) => {
  const me = useSelector((i) => i.reducer.user);
  const [selectedFile, setSelectedFile] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  console.log("shahmeer", selectedFile);
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setRemoveValue(event.target.value);
    // event.target.value = null;
    // this.setState({ selectedFile: event.target.files[0] });
    // event.target.value = null;
  };
  useEffect(() => {
    // console.log("jiih");
    getLoggeduser();
  }, []);
  const getLoggeduser = () => {
    // console.log("chal");
    axios.get("/loggedFaculty").then((res) => {
      console.log("use too", typeof res.data.user);
      //   setUser(res.data.user);
      // this.setState({ user: res.data.user });
      if (typeof res?.data?.user === "object") {
        userProfile(res.data.user);
      }
    });
  };
  const userProfile = (data) => {
    dispatch({ type: "SAVE_USER", payload: data });
  };
  // const getBase64 = (file) => {
  //   console.log("object", file);
  //   let document = "";
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     document = reader.result.replace("data:", "").replace(/^.+,/, "");
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  //   console.log(document);
  //   return document;
  // };
  function imageUploaded() {
    let base64String = "";
    // var file = document.querySelector("input[type=file]")["files"][0];

    var reader = new FileReader();

    console.log("next");
    reader.onload = function () {
      console.log("next2");

      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

      const imageBase64Stringsep = base64String;

      // alert(imageBase64Stringsep);
      console.log("bade", base64String);
    };
    console.log("front");
    reader.readAsDataURL(selectedFile);
    console.log(reader);

    let data = {
      image: base64String,
    };
    const dd = JSON.stringify(data);
    // Axios.post("35.78.89.226:8000", { dd }).then((res) => {
    //   console.log(res, "res2");
    // });
    fetch("35.78.89.226:8000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data, "res2");
    });

    return base64String;
  }

  const onFileUpload = async () => {
    const res = imageUploaded();
    // const res = getBase64(selectedFile);
    console.log("res", res);
    // const url = await uploadFile();
    // axios
    //   .post("createVaccine", {
    //     name: selectedFile.name,
    //     path: url,
    //   })
    //   .then(() => {
    //     setRemoveValue("");
    //     setSelectedFile("");
    //     alert("uploaded");
    //   });
    // let newArr = state.courseDocument;
    // newArr.push({ url: url, fileName: selectedFile.name });
    // axios
    //   .post(`editCourse/${state._id}`, {
    //     ...state,
    //     courseDocument: newArr,
    //     status: "selected",
    //   })
    //   .then(() => {
    //     const newCourses = props.courses.map((obj) => {
    //       //   return obj._id === state._id
    //       //     ? { ...obj, courseDocument: newArr, status: "selected" }
    //       //     : obj;
    //     });
    // userCourses(newCourses);
    // userProfile({
    //   ...props.user,
    //   courses: newCourses,
    // });
    // console.log("object", newCourses);
    // let newDta = { ...props.user, courses: newCourses };
    // console.log("klk", newDta);
    // axios
    //   .post("/facultyCourseUpdated", {
    //     newDta,
    //   })
    //   .then(() => {
    //     alert("uploaded");
    //   });
    // });
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
      console.log("url", url);
      return url;
    } catch (e) {
      // console.log('error', e);
    }
  };
  const url = "https://www.w3schools.com/images/img_girl.jpg";
  if (location.pathname === "/dashboard/vaccineDetails") {
    return <Outlet />;
  }
  if (location.pathname === "/dashboard/vaccineForm") {
    return <Outlet />;
  }
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
              p={2}
              lg={5}
              sm={6}
              mt={5}
              mb={4}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                display: "grid",
                // backgroundColor: "red",
              }}
            >
              {/* <Box
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    borderColor: "red",
                    borderWidth: 2,
                    padding: 10,
                  }}
                >
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
                      backgroundColor: "#1d80e1",
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
              </Box> */}
              {/* <Button
                onClick={() => {
                  navigate("vaccineDetails");
                }}
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
              </Button> */}
              <Button
                onClick={() => {
                  navigate("vaccineForm");
                }}
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
                Form
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

// export default VacancyDashboard;
function mapStateToProps({ reducer: { courses, user } }) {
  console.log("user", user);

  return {
    courses,
    user,
  };
}
export default connect(mapStateToProps)(VacancyDashboard);
