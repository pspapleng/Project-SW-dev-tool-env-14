import React from "react";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DarkGrayBut } from "../../components/Button";
import MainPageModal from "../../components/Modals/MainPageModal";
import MainPageCard from "../../components/Cards/MainPageCard";
function Home() {
  return (
    <div>
      {localStorage.getItem("doAssessment") ? false : <MainPageModal />}
      <Grid id="top-row" container>
        <Grid item xs={4}>
          <img
            src={require("../../assets/main2.jpg")}
            alt="main"
            width={"300%"}
            height={"100%"}
          />
          <Box
            sx={{
              position: "absolute",
              top: "35%",
              bottom: 0,
              left: "40px",
              right: 0,
              width: "20vw",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              MoodMent
            </Typography>
            <Typography sx={{ color: "#fff" }}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <DarkGrayBut variant="contained">Make an assessment</DarkGrayBut>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid id="bottom-row" container sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <MainPageCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
