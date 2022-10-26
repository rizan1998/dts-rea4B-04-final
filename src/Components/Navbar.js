import { MovieFilter } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import UserLog from "./Auth/UserLogs";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Favorit", link: "/favorit" },
  { text: "About", link: "/about" },
];

function Navbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <MovieFilter sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
              MY<span style={{ color: `#FF760D` }}>NIME</span>
            </Link>
          </Typography>
          <Box sx={{ display: "block" }}>
            {navItems.map((item) => (
              <NavLink end to={item.link} key={item.text} className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>
                {item.text}
              </NavLink>
            ))}
          </Box>
          <UserLog />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
