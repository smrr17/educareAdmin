import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Select from "react-select";
import { width } from "@mui/system";
import axios from "../api/api";
const FacultyRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);
  console.log("courses", courses);
  // const [courses1, setCourses] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = async () => {
    axios.get("/getCourses").then((res) => {
      setData(res.data);
      console.log(res);
    });
  };

  let navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post("/facultyRegistration", {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        courses,
        contact,
      })
      .then(() => {
        courses.forEach((i) => {
          console.log(i);
          axios.post(`/editCourse/${i._id}`, { ...i }).then(() => {
            console.log("hogya");
          });
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setContact("");
        setCourses([]);
        alert("uploaded");
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: width * 0.2,
      borderBottom: "1px dotted pink",
      color: "black",
      padding: 10,
      fontSize: 10,
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
      display: "flex",
      backgroundColor: "white",
      borderRadius: 15,

      fontSize: 12,
      maxWidth: "100%",
      marginInline: 17,

      //   marginLeft: 44,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 100ms";

      return { ...provided, opacity, transition };
    },
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
        sx={{
          backgroundColor: "black",
        }}
        height={"95vh"}
      >
        <Box style={{ flex: 1, paddingTop: 30 }}>
          <Typography
            align={"center"}
            fontSize={28}
            fontWeight={"bold"}
            sx={{ color: "#00f700" }}
          >
            Faculty Form
          </Typography>
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
                width: "50%",
                height: "93%",
                alignSelf: "center",
                backgroundColor: "#191c24",
                borderRadius: 10,
              }}
            >
              <Box p={1} sx={{}}>
                <Typography
                  align="center"
                  fontSize={22}
                  style={{ color: "#00f700", fontWeight: "bold" }}
                >
                  Create Faculty
                </Typography>
                <Card
                  style={{
                    marginTop: 8,
                    overflow: "auto",
                    backgroundColor: "#191c24",
                    height: "50vh",
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
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
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
                      alignItems: "center",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      type={"text"}
                      placeholder="Contact "
                      style={{
                        backgroundColor: "",
                        padding: 10,
                        borderRadius: 15,
                        margin: 15,
                        flex: 1,
                        width: 170,
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type={"password"}
                      placeholder="Password"
                      style={{
                        backgroundColor: "",
                        padding: 10,
                        borderRadius: 15,
                        margin: 15,
                        flex: 1,
                      }}
                    />
                    <input
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      required={true}
                      type={"password"}
                      placeholder="Confirm Password"
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
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  >
                    <Select
                      maxMenuHeight={90}
                      placeholder={"Courses"}
                      isMulti
                      value={courses}
                      onChange={setCourses}
                      options={data.filter((i) => i.status === "unselected")}
                      styles={customStyles}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      onClick={onSubmit}
                      style={{}}
                      sx={{
                        backgroundColor: "#00f700",
                        borderRadius: 3,
                        color: "white",
                        height: 48,
                        width: "220px",
                        mt: 2,
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Card>
              </Box>
            </Card>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FacultyRegistration;
