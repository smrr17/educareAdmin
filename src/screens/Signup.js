import { Grid, Box, Button, Card, Typography, Tabs, Tab } from "@mui/material";
import { useLocation } from "react-router-dom";
import pic from "../assets/images/logo.png";
import LoginForm from "../components/LoginForm";
import React, { useState, useEffect } from "react";

const Signup = () => {
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
              height: "93%",
              alignSelf: "center",
              backgroundColor: "#191c24",
            }}
          >
            <Box p={3} sx={{}}>
              <LoginForm value="Signup" data={true} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Signup;
