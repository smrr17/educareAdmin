import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";
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
import LoginForm from "./LoginForm";

const FacultyCourses = () => {
  const [courseName, setCourseName] = useState("");
  const [courseID, setCourseID] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  let navigate = useNavigate();
  const onsubmit = async () => {
    axios
      .post("/createCourse", {
        courseName,
        courseID,
        courseCredit,
      })
      .then(() => {
        alert("uploaded");
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
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
            Course Form
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
                borderRadius: 10,
                width: "40%",
                height: "90%",
                alignSelf: "center",
                backgroundColor: "#191c24",
              }}
            >
              <Box p={1} sx={{}}>
                <Typography
                  align="center"
                  fontSize={18}
                  style={{ color: "#00f700", fontWeight: "bold" }}
                >
                  Create Courses
                </Typography>
                <Card
                  style={{
                    marginTop: 8,
                    backgroundColor: "#191c24",
                    height: "40vh",
                    borderRadius: 14,
                    display: "grid",
                  }}
                >
                  <input
                    onChange={(e) => {
                      setCourseName(e.target.value);
                    }}
                    value={courseName}
                    type={"text"}
                    placeholder="Course Name"
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                    }}
                  />
                  <input
                    onChange={(e) => {
                      setCourseID(e.target.value);
                    }}
                    value={courseID}
                    type={"text"}
                    placeholder="Course ID "
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                      flex: 1,
                    }}
                  />{" "}
                  <input
                    value={courseCredit}
                    onChange={(e) => {
                      setCourseCredit(e.target.value);
                    }}
                    type={"text"}
                    placeholder="Credit Hours"
                    style={{
                      backgroundColor: "",
                      padding: 10,
                      borderRadius: 15,
                      margin: 15,
                      flex: 1,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="submit"
                      onClick={onsubmit}
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

export default FacultyCourses;
