import "./index.css";

import { Box } from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import PrivateComponent from "./Components/PrivateComponent";
import PremiumPage from "./Components/PremiumPage/PremiumPage";
import NotFound from "./Components/NotFound";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import About from "./Components/About/About";

import Home from "./Components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route
            path="premium"
            element={
              <PrivateComponent>
                <PremiumPage />
              </PrivateComponent>
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={
              <PrivateComponent loginOnly={false}>
                <Login />
              </PrivateComponent>
            }
          />
          <Route
            path="register"
            element={
              <PrivateComponent loginOnly={false}>
                <Register />
              </PrivateComponent>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
