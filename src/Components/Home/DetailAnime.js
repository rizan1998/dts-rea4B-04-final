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
import Button from "@mui/material/Button";
import TvOffIcon from "@mui/icons-material/TvOff";

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
    <div style={{ marginBottom: "500px" }}>
      <Container maxWidth="md" className="cari-anime" sx={{ marginTop: "100px", border: "1px #FF760D solid", padding: "20px" }}>
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
          </Grid>
          <Grid item style={{ color: "white" }} xs={12}>
            <Box>Synopsis</Box>
            <Box> {data.data.synopsis ? data.data.synopsis : "-"}</Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#FF760D" }}>Back</Button>
          </Link>
        </Grid>
      </Container>

      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Box style={{ marginTop: "20px" }}>
          <h1 style={{ color: "#FF760D " }}>Trailer anime</h1>
        </Box>
        {data.data.trailer.embed_url ? (
          <iframe width="853" height="480" src={data.data.trailer.embed_url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube"></iframe>
        ) : (
          <Box style={{ marginTop: "100px", textAlign: "center" }}>
            <TvOffIcon style={{ color: "#FF760D " }}></TvOffIcon> <h3 style={{ color: "#FF760D " }}>Sory Trailer not exsist !</h3>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default DetailAnime;
