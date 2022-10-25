import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function CardAnime(item) {
  const link = "/detailAnime/" + item.item.mal_id;

  let genres = "-";
  if (item.item.genres.length > 0) {
    genres = item.item.genres.map((genre) => <span key={genre.name}>{genre.name}, </span>);
  } else {
    genres = "-";
  }

  return (
    <Grid item xs={2} key={item.item.mal_id}>
      <Link to={link} style={{ textDecoration: "none" }} preventScrollReset={true}>
        <Card className="cardParent" sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="190" image={item.item.images.jpg.image_url} alt="green iguana" />
          <CardContent style={{ height: "70px" }}>
            <Typography gutterBottom sx={{ fontSize: "12px" }} variant="p" component="div">
              {item.item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Rating : {item.item.rating} */}
            </Typography>
            <Typography sx={{ marginTop: "10px" }} variant="body2" color="text.secondary">
              Genre: {genres}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardAnime;
