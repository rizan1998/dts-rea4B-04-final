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
import store from "./app/store";
import DetailAnime from "./Components/Home/DetailAnime";
import About from "./Components/About/About";
import ScrollToTop from "./helpers/ScrollToTop";
import FavoritePage from "./Components/Favorit/Favorite";

import Home from "./Components/Home/Home";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route
              path="favorit"
              element={
                <PrivateComponent>
                  <FavoritePage />
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
            <Route path="detailAnime/:id" element={<DetailAnime />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
