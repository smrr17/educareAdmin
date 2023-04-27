import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import pic from "../assets/images/doctor.jpeg";
import axios from "../api/api";
import { db } from "../components/firebase";
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
import { connect, useDispatch, useSelector } from "react-redux";
function VacancyForm() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [dose1, setDose1] = useState("");
  const [dose2, setDose2] = useState("");
  console.log("object", name, fname, typeof dob, nic, dose1, dose2);
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  const url = "https://www.w3schools.com/images/img_girl.jpg";
  const onSubmit = () => {
    if ((!name, !fname, !nic, !dob, !dose1, !dose2)) {
      console.log("object2", name, fname, dob, nic, dose1, dose2);
      return alert("please fill all fields");
    }
    axios
      .post("/createVaccineForm", {
        name,
        fname,
        nic,
        dob,
        dose1,
        dose2,
      })
      .then((res) => {
        console.log("ere", res);
        if (res.data.status === "success") {
          alert("uploaded");
          navigate("/dashboard");
        }
      });
  };

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
            Form
          </Typography>
          {/* <div
          onClick={() => {
            navigate("profile");
          }}
        >
          <Avatar sx={{ color: "red" }} src={url} />
        </div> */}
        </Toolbar>
      </AppBar>
      <Box style={{ padding: 10 }}>
        <Box style={{ flex: 1, paddingTop: 30 }}>
          <Typography
            align={"center"}
            fontSize={28}
            fontWeight={"bold"}
            sx={{ color: "#1d80e1" }}
          >
            Form
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
                  Create Form
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
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type={"text"}
                      placeholder="Name"
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
                        setFname(e.target.value);
                      }}
                      type={"text"}
                      placeholder="Father Name"
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
                        setNic(e.target.value);
                      }}
                      type={"text"}
                      placeholder="NIC No"
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
                        setDob(e.target.value);
                      }}
                      type={"date"}
                      // placeholder="Date of  "
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
                      alignItems: "center",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setDose1(e.target.value);
                      }}
                      placeholder="Dose 1"
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
                        setDose2(e.target.value);
                      }}
                      // type={"password"}
                      placeholder="Dose 2"
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
                      onClick={onSubmit}
                      style={{}}
                      sx={{
                        backgroundColor: "#1d80e1",
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
        {/* {data?.map((i) => {
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
        })} */}
      </Box>
    </Box>
  );
}

export default VacancyForm;
