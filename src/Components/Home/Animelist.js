import { Container } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import CardAnime from "./CardAnime";
import { useGetColorsQuery } from "../../services/animeApi";

import BannerBackground from "../../images/2.jpg";

import React from "react";

function Animelist() {
  const { data, error, isLoading } = useGetColorsQuery();
  const loadData = isLoading ? <>Loading</> : data.data.map((item) => <CardAnime item={item} key={item.mal_id} />);

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
            {error ? <>Oh no, there was an error</> : loadData}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Animelist;
