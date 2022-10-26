import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardAnime from "./CardAnime";
import { useGetColorsQuery } from "../../services/animeApi";
import Box from "@mui/system/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";

function Animelist() {
  const { data, error, isLoading } = useGetColorsQuery();

  const loadData = isLoading ? <>Loading</> : data.data.map((item) => <CardAnime item={item} key={item.mal_id} />);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="cari-anime" sx={{ marginTop: "50px", marginBottom: "10px" }}>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
          <Box>
            <p style={{ fontSize: "30px", color: "#FF760D" }}>List Anime</p>
          </Box>
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <Grid></Grid>
          {error ? <>Oh no, there was an error</> : <Slider {...settings}>{loadData}</Slider>}
        </Box>
      </Container>
    </>
  );
}

export default Animelist;
