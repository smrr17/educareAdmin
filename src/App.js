import "./App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Footer from "./screens/Footer";
import Profile from "./screens/Profile";

function App() {
  let isLogged = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              isLogged ? (
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
            }
          />
          <Route path="/post/:lll" element={<Post />} />
          <Route path="/post/:lll/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<h1>page not found error 404 !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
