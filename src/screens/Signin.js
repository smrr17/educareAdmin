import {
  Grid,
  Box,
  Button,
  Card,
  Typography,
  Tabs,
  Tab,
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../assets/images/logoo.jpeg";
import LoginForm from "../components/LoginForm";
import React, { useState } from "react";
import axios from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import ToggleSwitch from "../components/ToggleSwitch";
import { CheckCircleOutline } from "@mui/icons-material";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  const dispatch = useDispatch();
  const setUser = (data) => {
    return dispatch({
      type: "isLogin",
      payload: data,
    });
  };
  const setUserProfile = (data) => {
    return dispatch({
      type: "SAVE_USER",
      payload: data,
    });
  };
  // const setAdmin = (data) => {
  //   return dispatch({
  //     type: "isLoginAdmin",
  //     payload: data,
  //   });
  // };
  // const setFaculty = (data) => {
  //   return dispatch({
  //     type: "isLoginFaculty",
  //     payload: data,
  //   });
  // };

  const signin = async () => {
    try {
      if (email && password) {
        await axios
          .post("/signin", {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log("res", res.data);
            if (res.data.status === "failed") {
              return alert(res.data.message);
            }
            console.log("sdfdsfdsf");
            navigate("/dashboard", {
              state: { item: res.data.token },
            });
            console.log("sdfdsfdsf", typeof res.data.token);
            setUser(true);
            setUserProfile({ email });
            // setAdmin(true);
            setEmail("");
            setPassword("");
            window.localStorage.setItem("type", "admin");
            window.localStorage.setItem("token", res.data.token);
          });
      } else {
        alert("please fill all fields");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const facultySignin = async () => {
    try {
      if (email && password) {
        await axios
          .post("/facultySignin", {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log("res", res.data);
            if (res.data.status === "failed") {
              return alert(res.data.response.data.error, "knkn");
            }
            console.log("sdfdsfdsf");
            navigate("/dashboard", { state: { item: "faculty" } });
            console.log("sdfdsfdsf");
            setUser(true);
            // setFaculty(true);
            setEmail("");
            setPassword("");
            window.localStorage.setItem("type", "faculty");
            window.localStorage.setItem("token", res.data.token);
          });
      } else {
        alert("please fill all fields");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  return (
    <Box
      style={{
        backgroundColor: "whitenn",
      }}
    >
      <Box
        style={{
          padding: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Typography style={{ color: "black" }}>
          {selected ? "Admin" : "Vaccinator"}
        </Typography>
        <ToggleButton
          style={{ backgroundColor: "#00f700", marginLeft: 5 }}
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckCircleOutline />
        </ToggleButton>
      </Box>
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
          <Grid p={10} lg={5} sm={6} mt={5} mb={4}>
            <Card
              sx={{
                width: "95%",
                height: "85%",
                alignSelf: "center",
                backgroundColor: "#1d80e150",
                borderRadius: 10,
              }}
            >
              <Box p={3} sx={{}}>
                <LoginForm
                  value="Signin"
                  email={email}
                  password={password}
                  setEmail={(e) => {
                    setEmail(e.target.value);
                  }}
                  setPassword={(e) => {
                    setPassword(e.target.value);
                  }}
                  // onClick={selected ? signin : facultySignin}
                  onClick={signin}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    //   <div style={{}} className="form">
    //     <form>
    //       <div className="input-container">
    //         <label>Username </label>
    //         <input type="text" name="uname" required />
    //       </div>
    //       <div className="input-container">
    //         <label>Password </label>
    //         <input type="password" name="pass" required />
    //       </div>
    //       <div className="button-container">
    //         <input type="submit" />
    //       </div>
    //     </form>
    //   </div>
  );
};

export default Signin;
