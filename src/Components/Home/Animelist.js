import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardAnime from "./CardAnime";
import { useGetColorsQuery } from "../../services/animeApi";
import Box from "@mui/system/Box";

import React from "react";

function Animelist() {
  const { data, error, isLoading } = useGetColorsQuery();

  const loadData = isLoading ? <>Loading</> : data.data.map((item) => <CardAnime item={item} key={item.mal_id} />);

  return (
    <>
      <Container className="cari-anime" sx={{ marginTop: "50px", marginBottom: "10px" }}>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}></Box>
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
