import {
  Grid,
  Box,
  Button,
  Card,
  Typography,
  Tabs,
  Tab,
  Avatar,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import pic from "../assets/images/logo.png";
import LoginForm from "../components/LoginForm";

const Signin = () => {
  let location = useLocation();
  console.log(location);
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
        <Grid p={10} lg={5} sm={6} mt={5} mb={4}>
          <Card
            sx={{
              width: "95%",
              height: "93%",
              alignSelf: "center",
              backgroundColor: "#191c24",
            }}
          >
            <Box p={3} sx={{}}>
              <LoginForm value="Signin" />
            </Box>
          </Card>
        </Grid>
      </Grid>
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
