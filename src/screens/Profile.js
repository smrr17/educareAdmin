import React from "react";
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
  TextField,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { NoEncryption } from "@mui/icons-material";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            Profile
          </Typography>
          <Button
            sx={{ color: "white" }}
            onClick={() => {
              navigate("/");
            }}
          >
            logout
            <LogoutIcon sx={{ marginLeft: 0.5, color: "white" }} />
          </Button>
        </Toolbar>
      </AppBar>
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{
          backgroundColor: "black",
          height: "90vh",
          p: 2,
        }}
      >
        <div
          style={{
            marginTop: 150,
            alignItems: "center",
          }}
        >
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                Name:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                F-Name:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                Username:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                Email:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                Address:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  width: "50%",
                  marginLeft: 10,
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Typography
                fontSize={24}
                fontWeight={"bold"}
                sx={{ color: "#00f700", width: "25%" }}
              >
                Contact:
              </Typography>
              <input
                style={{
                  outline: "none",
                  padding: 10,
                  paddingInline: 43,
                  marginLeft: 10,
                  width: "40%",
                  borderRadius: 10,
                  borderColor: "#00f700",
                  borderWidth: 4,
                }}
                type={"text"}
              />
            </Box>
          </Box>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              onClick={() => {
                navigate("");
              }}
              style={{}}
              sx={{
                backgroundColor: "#00f700",

                borderRadius: 3,
                color: "white",
                height: 48,
                width: "289px",

                marginTop: 10,
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default Profile;
