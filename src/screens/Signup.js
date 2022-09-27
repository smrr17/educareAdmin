import { Grid, Box, Button, Card, Typography, Tabs, Tab } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../assets/images/logo.png";
import LoginForm from "../components/LoginForm";
import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("japan", email, password, confirmPassword);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const setUser = (data) => {
    return dispatch({
      type: "isLogin",
      payload: data,
    });
  };
  const setAdmin = (data) => {
    return dispatch({
      type: "isLoginAdmin",
      payload: data,
    });
  };
  const signup = async () => {
    try {
      if (email && password && confirmPassword) {
        await axios
          .post("/signup", {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          })
          .then((res) => {
            console.log("res", res.data);
            if (res.data.status === "failed") {
              return alert(res.data.message);
            }
            // window.localStorage.setItem("token", res.data.token);
            console.log("sdfdsfdsf");
            navigate("/adminDashboard", { state: { item: email } });
            console.log("sdfdsfdsf");
            setUser(true);
            setAdmin(true);
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          });
      } else {
        alert("please fill all fields");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      sx={{}}
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      pt={3}
    >
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={6}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid p={10} lg={5} sm={6} mt={5} pb={6} mb={0}>
          <Card
            sx={{
              width: "95%",
              height: "85%",
              alignSelf: "center",
              backgroundColor: "#191c24",
              borderRadius: 10,
            }}
          >
            <Box p={3} sx={{}}>
              <LoginForm
                value="Signup"
                data={true}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setEmail={(e) => {
                  setEmail(e.target.value);
                }}
                setPassword={(e) => {
                  setPassword(e.target.value);
                }}
                setConfirmPassword={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onClick={signup}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Signup;
