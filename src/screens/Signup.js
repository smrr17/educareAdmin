import {
  Grid,
  Box,
  Button,
  Card,
  Typography,
  Tabs,
  Tab,
  ToggleButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../assets/images/logoo.jpeg";
import LoginForm from "../components/LoginForm";
import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useDispatch } from "react-redux";
import { CheckCircleOutline } from "@mui/icons-material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selected, setSelected] = useState(false);

  console.log("japan", email, password, confirmPassword);
  let navigate = useNavigate();
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
            navigate("/dashboard", { state: { item: email } });
            console.log("sdfdsfdsf");
            setUser(true);
            setUserProfile({ email });
            // setAdmin(true);
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
        backgroundColor: "white",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
      <Grid container sx={{ height: "85vh", padding: 2 }}>
        <Grid
          lg={7}
          sm={6}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 10,
          }}
        ></Grid>
        <Grid p={10} lg={5} sm={6} mt={5} pb={6} mb={0}>
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
