import React from "react";

import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import BannerBackground from "../../images/2.jpg";

function Jumbotron() {
  return (
    <>
      <Box className="jumbotron" style={{ backgroundImage: `url(${BannerBackground})` }}></Box>
      <Box className="jumbotron-cover">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ marginTop: `200px` }}>
                <p className="heading1">
                  <span className="span-marked">Nikmati</span> nonton anime tanpa iklan <span className="span-marked2">disini</span>
                </p>
                <p className="heading2">cari anime favorit anda dengan mudah atau tonton anime yang sedang tanya saat ini</p>
                <Box>
                  <Button className="bg-color-btn" size="small" variant="contained">
                    <PlayArrowIcon sx={{ marginRight: "5px" }} /> Watch now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Jumbotron;
