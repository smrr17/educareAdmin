import "./App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import Layout from "./screens/Layout";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./screens/Footer";
import Profile from "./screens/Profile";
import FacultyRegistration from "./components/FacultyRegistration";
import FacultyCourses from "./components/FacultyCourses";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect, useSelector } from "react-redux";
import { render } from "@testing-library/react";
import AdminDashboard from "./components/AdminDashboard";
import CourseDetails from "./screens/CourseDetails";

// class App extends React.Component {
const App = (props) => {
  // state = {
  //   isLogged: false,
  //   ready: false,
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ isLogged: this.props.isLogin });
  //   }, 2000);
  //   // this.setState({ isLogged: this.props.isLogin });
  // }
  // const [isLogged, setIsLogged] = useState(false);
  // useEffect(() => {
  //   setIsLogged(props.isLogin);
  // }, [props.isLogin]);

  // console.log("token", token);
  // let isLogged = true;
  // const isLogin = useSelector((state) => state.isLogin);
  // useEffect(() => {
  //   console.log("object", isLogin);
  //   // setTimeout(() => {
  //   //   const token = window.localStorage.getItem("token");
  //   //   console.log("object", token);
  //   //   setToken(token);
  //   // }, 5000);
  //   // isLogged = localStorage.getItem("isLogin");
  //   // console.log(isLogged);
  // }, []);
  // render() {
  // const { isLogged, ready } = this.state;
  // console.log(isLogged, "login,,");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !props.isLogin ? (
                <Layout />
              ) : props.isLoginAdmin ? (
                <Navigate to="/adminDashboard" replace />
              ) : props.isLoginFaculty ? (
                <Navigate to="/dashboard" replace />
              ) : null
            }
          >
            <Route index element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              props.isLogin ? (
                props.isLoginFaculty ? (
                  <Dashboard />
                ) : (
                  <Navigate
                    to="/"
                    replace
                    state={{
                      st: "user is not logged in",
                    }}
                  />
                )
              ) : null
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="courseDetails" element={<CourseDetails />} />
          </Route>
          <Route
            path="/adminDashboard"
            element={
              props.isLogin ? (
                props.isLoginAdmin ? (
                  <AdminDashboard />
                ) : (
                  <Navigate
                    to="/"
                    replace
                    state={{
                      st: "user is not logged in",
                    }}
                  />
                )
              ) : null
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route
              path="facultyRegistration"
              element={<FacultyRegistration />}
            />
            <Route path="facultyCourses" element={<FacultyCourses />} />
          </Route>
          <Route path="*" element={<h1>page not found error 404 !!</h1>} />

          {/* <Route path="/post/:lll" element={<Post />} />
          <Route path="/post/:lll/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
  // }
};

function mapStateToProps({
  reducer: { isLogin, isLoginFaculty, isLoginAdmin },
}) {
  console.log("asaad", isLogin);
  console.log("FAC", isLoginFaculty);
  console.log("ADMIN", isLoginAdmin);
  return {
    isLogin,
    isLoginFaculty,
    isLoginAdmin,
  };
}

export default connect(mapStateToProps)(App);
