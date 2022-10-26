import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { animeAsync, selectUser } from "../../reducers/animeSlice";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";

function CariAnime() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(animeAsync(malId));
  }, []);

  const HandleSubmit = () => {
    dispatch(animeAsync(malId));
  };

  const isEmpty = Object.keys(user).length === 0;
  if (isEmpty == false) {
  }

  const [malId, setMalId] = useState(1);

  return (
    <>
      <Container className="cari-anime" sx={{ marginTop: "50px", marginBottom: "100px" }}>
        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>
          <Box style={{ backgroundColor: "" }}>
            <p style={{ fontSize: "30px", color: "#FF760D" }}>Cari Anime berdasarkan id</p>
            <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignContent: "center" }}>
              <TextField hiddenLabel defaultValue="1" name="idAnime" onChange={({ target }) => setMalId(target.value)} placeholder="Masukan id" className="search-bar" variant="filled" id="search-bar" size="small" />
              <IconButton type="submit" onClick={HandleSubmit} style={{ color: "white" }} aria-label="search">
                <SearchIcon style={{ fill: "#FF760D" }} />
              </IconButton>
            </Box>
          </Box>
          <Box style={{ marginTop: "20px", width: "100%", backgroundColor: "" }}>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    src={user.images?.jpg.image_url ?? "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    image={user.length > 0 ? user.images.jpg.image_url : ""}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.title ? user.title : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Genre : {user.length > 0 ? user.genres.map((item) => <span key={item.name}>{item.name}, </span>) : ""}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default CariAnime;
