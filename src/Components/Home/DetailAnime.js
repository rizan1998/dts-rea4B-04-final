import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useGetColorByIdQuery } from "../../services/animeApi";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";

function DetailAnime() {
  const id = useParams().id;
  const { data, error, isLoading } = useGetColorByIdQuery(id);

  console.log(data);

  if (isLoading) {
    return (
      <>
        <Container maxWidth="md" className="cari-anime" sx={{ marginTop: "100px", marginBottom: "600px", border: "1px #FF760D solid", padding: "20px" }}>
          <Box sx={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" }}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </Box>
        </Container>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Container maxWidth="md" className="cari-anime" sx={{ marginTop: "100px", marginBottom: "600px", border: "1px #FF760D solid", padding: "20px" }}>
          <Box sx={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" }}>
            <Typography sx={{ color: "#FF760D" }} variant="h5" gutterBottom>
              Sory data not exist !
              <Box style={{ color: "#FF760D" }}>
                <Link style={{ textDecoration: "none", color: "#FF760D" }} to="/">
                  <ArrowBackIcon></ArrowBackIcon> Back
                </Link>
              </Box>
            </Typography>
          </Box>
        </Container>
      </>
    );
  }

  if (data.status === 404 || data.length === 0) {
    return (
      <>
        <Container maxWidth="md" className="cari-anime" sx={{ marginTop: "100px", marginBottom: "600px", border: "1px #FF760D solid", padding: "20px" }}>
          <Box sx={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" }}>
            <Typography sx={{ color: "#FF760D" }} variant="h5" gutterBottom>
              Sory data not exist !
              <Box style={{ color: "#FF760D" }}>
                <Link style={{ textDecoration: "none", color: "#FF760D" }} to="/">
                  <ArrowBackIcon></ArrowBackIcon> Back
                </Link>
              </Box>
            </Typography>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="md" className="cari-anime" sx={{ marginTop: "100px", marginBottom: "600px", border: "1px #FF760D solid", padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="300" image={data.data.images.webp.large_image_url} alt="green iguana" />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Grid sx={{ marginTop: "20px" }} container>
              <Grid item xs={3}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  Title
                </Typography>
              </Grid>
              <Grid item sx={{ color: "white" }} xs={1}>
                :
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  {data.data.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  Genre
                </Typography>
              </Grid>
              <Grid item sx={{ color: "white" }} xs={1}>
                :
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  {data.data.genres.length > 0 ? data.data.genres.map((item) => <span key={item.name}>{item.name}, </span>) : "-"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  Rating
                </Typography>
              </Grid>
              <Grid item sx={{ color: "white" }} xs={1}>
                :
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  {data.data.rating ? data.data.rating : "-"}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
                  Synopsis
                </Typography>
              </Grid>
              <Grid item sx={{ color: "white" }} xs={1}>
                :
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ color: "white" }} variant="span" gutterBottom>
                  {data.data.synopsis ? data.data.synopsis : "-"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailAnime;
