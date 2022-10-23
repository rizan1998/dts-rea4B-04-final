import { Container } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import BannerBackground from "../../images/2.jpg";

import React from "react";

function Animelist() {
  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

  const data = ["Paris", "London", "New York", "Tokyo", "Berlin", "Buenos Aires", "Cairo", "Canberra", "Rio de Janeiro", "Dublin"];

  return (
    <>
      <Container className="cari-anime" sx={{ marginTop: "50px", marginBottom: "600px" }}>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Box style={{ textAlign: "center" }}></Box>
          <form>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
              <Box>
                <p style={{ fontSize: "30px", color: "#FF760D" }}>Cari Anime</p>
              </Box>
              <Box style={{ marginTop: "20px" }}>
                <TextField hiddenLabel placeholder="Masukan nama anime" className="search-bar" variant="filled" id="search-bar" size="small" />
                <IconButton type="submit" style={{ color: "white" }} aria-label="search">
                  <SearchIcon style={{ fill: "#FF760D" }} />
                </IconButton>
              </Box>
            </Box>
          </form>
        </Box>
        <Box style={{ marginTop: "50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2}>
              <Card className="cardParent" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Animelist;
