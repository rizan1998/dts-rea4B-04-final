import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../Config/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography style={{ color: "#FF760D" }} component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" className="search-bar" required fullWidth id="email" label="Email Address" style={{ border: "1px #FF760D solid ", color: "white" }} name="email" autoComplete="email" autoFocus />
          <TextField margin="normal" className="search-bar" required fullWidth style={{ border: "1px #FF760D solid ", color: "white" }} name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <Typography color="red">{errorMessage}</Typography>
          <Button style={{ backgroundColor: "#FF760D" }} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ color: "#FF760D", textDecoration: "none" }} to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
