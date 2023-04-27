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

function VaccineValidate() {
  let location = useLocation();
  const [selectedFile, setSelectedFile] = useState("");
  const [removeValue, setRemoveValue] = useState("");
  const [isMatch, setisMatch] = useState(false);
  const [valid, setValid] = useState(null);
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   if (state?.nic === valid?.cnic) {
  //     setisMatch(true);
  //   }
  // }, [valid]);
  const { state } = location;
  console.log("c", isMatch);
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setRemoveValue(event.target.value);
    // event.target.value = null;
    // this.setState({ selectedFile: event.target.files[0] });
    // event.target.value = null;
  };
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
    setShow(true);
    return setTimeout(() => {
      setValid({
        // cnic: " 1234567890",
        // dob: " 26-04-1888",
        // fname: " Naimullah Khan",
        // name: " Talha Khan",
        // vaccine: ["Pfizer", "Pfizer"],
      });
    }, 2000);
    // return setValid({
    //   // cnic: " 4210199424413",
    //   // dob: " 17-09-1997",
    //   // fname: " Aftab Ahmed",
    //   // name: " Shahmeer Khan",
    //   // vaccine: ["Pfizer", "Pfizer"],
    // });
   
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
  console.log(isMatch);
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
        </Toolbar>
      </AppBar>
      <Box>
        <Box
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
        </Box>
      </Box>
      <Box
        sx={{}}
        style={{
          backgroundColor: "white",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            height: "85vh",
            padding: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            p={5}
            lg={5}
            sm={5}
            mt={5}
            mb={4}
          >
            <Card
              sx={{
                borderRadius: 10,
                width: 800,
                height: "30%",
                // alignSelf: "center",
                backgroundColor: "#191c24",
              }}
            >
              <Box p={1} sx={{}}>
                <Typography
                  align="center"
                  fontSize={18}
                  style={{ color: "#1d80e1", fontWeight: "bold" }}
                >
                  Person Data
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
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      Name:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.name}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      Father Name:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.fname}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      Nic:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.nic}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      DOB:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.dob}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      Dose 1:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.dose1}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#1d80e1", fontWeight: "bold" }}
                    >
                      Dose 2:
                    </Typography>
                    <Typography
                      //   align="center"
                      fontSize={16}
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {state.dose2}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Card>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            p={5}
            lg={5}
            sm={5}
            mt={5}
            mb={4}
          >
            {show && (
              <Card
                sx={{
                  borderRadius: 10,
                  width: "120%",
                  height: "80%",
                  alignSelf: "center",
                  backgroundColor: "#191c24",
                }}
              >
                <Box p={1} sx={{}}>
                  <Typography
                    align="center"
                    fontSize={18}
                    style={{ color: "#1d80e1", fontWeight: "bold" }}
                  >
                    Image Data
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
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        Name:
                      </Typography>
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid?.name}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        Father Name:
                      </Typography>
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid?.fname}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        NIC no:
                      </Typography>
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid?.cnic}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        DOB:
                      </Typography>
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid?.dob}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        Dose 1:
                      </Typography>
                      <Typography
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid && valid?.vaccine[0]}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#1d80e1", fontWeight: "bold" }}
                      >
                        Name:
                      </Typography>
                      <Typography
                        //   align="center"
                        fontSize={16}
                        style={{ color: "#fff", fontWeight: "bold" }}
                      >
                        {valid && valid?.vaccine[1]}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </Card>
            )}
          </Grid>
          {/* <Button
            onClick={() => {
              if (state.nic === valid.cnic) {
                setisMatch(true);
              }
            }}
            style={{
              backgroundColor: "#1d80e1",
              padding: 8,
              borderRadius: 8,
              paddingInline: 20,
            }}
            variant="contained"
            component="label"
          >
            match
          </Button> */}
        </Grid>
        {/* <Box style={{ flexDirection: "row", display: "flex" }}>
          <Typography>{`Is-Match   `} </Typography>
          <Typography> {isMatch } </Typography>
        </Box> */}
      </Box>
      {/* <Grid
        container
        sx={{ height: "85vh", padding: 2, backgroundColor: "#fff" }}
      >
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
          name:<h4>{state.name}</h4>
        </Box>
      </Grid> */}
    </Box>
  );
}

export default VaccineValidate;
