import React from "react";
import Animelist from "./Animelist";

import Jumbotron from "./Jumbotron";
import CariAnime from "./CariAnime";

function Home() {
  return (
    <>
      <Jumbotron />
      <Animelist />
      <CariAnime />
    </>
  );
}

export default Home;
