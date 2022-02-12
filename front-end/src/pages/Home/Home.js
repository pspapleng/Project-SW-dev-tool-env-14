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
      <MainPageModal/>
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
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 35,
                fontWeight: "bold",
                width: "25%",
                textAlign: "center",
              }}
            >
              MoodMent
            </Typography>
            <Box sx={{ width: "25%", textAlign: "center", mt: 2 }}>
              <Typography sx={{ color: "#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
              <DarkGrayBut variant="contained" style={{ marginTop: 20 }}>
                Make an assessment
              </DarkGrayBut>
            </Box>
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