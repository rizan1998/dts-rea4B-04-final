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
  // const data = [
  //   {
  //     _id: "48561",
  //     __v: 1,
  //     alternativeTitles: ["Gekijouban Jujutsu Kaisen 0", "劇場版 呪術廻戦 0", "Jujutsu Kaisen 0"],
  //     genres: ["Action", "Fantasy"],
  //     hasRanking: true,
  //     image: "https://cdn.myanimelist.net/images/anime/1121/119044.jpg",
  //     link: "https://myanimelist.net/anime/48561/Jujutsu_Kaisen_0_Movie",
  //     ranking: 119,
  //     thumb: "https://cdn.myanimelist.net/r/50x70/images/anime/1121/119044.jpg?s=1ff4db7140a7d31a110576b2699c87c1",
  //     title: "Jujutsu Kaisen 0 Movie",
  //     episodes: 1,
  //     hasEpisode: true,
  //     status: "Finished Airing",
  //     synopsis:
  //       "Violent misfortunes frequently occur around 16-year-old Yuuta Okkotsu, a timid victim of high school bullying. Yuuta is saddled with a monstrous curse, a power that dishes out brutal revenge against his bullies. Rika Orimoto, Yuuta's curse, is a shadow from his tragic childhood and a potentially lethal threat to anyone who dares wrong him.\n\nYuuta's unique situation catches the attention of Satoru Gojou, a powerful sorcerer who teaches at Tokyo Jujutsu High. Gojou sees immense potential in Yuuta, and he hopes to help the boy channel his deadly burden into a force for good. Yet Yuuta struggles to find his place among his talented classmates: the selectively mute Toge Inumaki, weapons expert Maki Zenin, and Panda.\n\nYuuta clumsily utilizes Rika on missions with the other first-year students, but the grisly aftermath of Rika's tremendous displays of power draws the interest of the calculating curse user Suguru Getou. As Getou strives to claim Rika's strength and use it to eliminate all non-jujutsu users from the world, Yuuta fights alongside his friends to stop the genocidal plot.\n\n[Written by MAL Rewrite]\n",
  //     type: "Movie",
  //   },
  //   {
  //     _id: "40748",
  //     __v: 1,
  //     alternativeTitles: ["Sorcery Fight", "JJK", "呪術廻戦", "Jujutsu Kaisen", "Jujutsu Kaisen", "Jujutsu Kaisen", "Jujutsu Kaisen"],
  //     genres: ["Action", "Fantasy"],
  //     hasRanking: true,
  //     image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
  //     link: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
  //     ranking: 56,
  //     thumb: "https://cdn.myanimelist.net/r/50x70/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",
  //     title: "Jujutsu Kaisen",
  //     episodes: 24,
  //     hasEpisode: true,
  //     status: "Finished Airing",
  //     synopsis:
  //       'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.\n\n[Written by MAL Rewrite]',
  //     type: "TV",
  //   },
  // ];

  const { data, error, isLoading } = useGetColorsQuery();
  console.log([data, error, isLoading]);
  const loadData = isLoading ? <>Loading</> : data.data.map((item) => <CardAnime item={item} key={item.mal_id} />);
  // const loadData = isLoading ? <>Loading...</> : data.data.map((item) => <>test</>);
  // const loadData = "";

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
