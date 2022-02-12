import React from "react";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DarkGrayBut } from "../../components/Button";
import MainPageModal from "../../components/Modals/MainPageModal";
import MainPageCard from "../../components/Cards/MainPageCard";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const goAssessment = () => {
    navigate('/Assessment');
  }
  return (
    <div>
      {localStorage.getItem("doAssessment") ? false : <MainPageModal />}
      <Grid id="top-row" container>
        <Grid item xs={4}>
          <img
          style={{
            position: 'relative'
          }}
            src={require("../../assets/main2.jpg")}
            alt="main"
            width={"300%"}
            height={"100%"}
          />
          <Box
            sx={{
              position: "absolute",
              top: "20vw",
              left: "40px",
              width: "20vw",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: '2vw',
                fontWeight: "bold",
              }}
            >
              MoodMent
            </Typography>
            <Typography sx={{ color: "#fff", fontSize: '1.3vw' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
            </Typography>
              <DarkGrayBut onClick={goAssessment} style={{marginTop: '2vw', padding: '1vw 2vw', fontSize: '1.4vw'}} variant="contained">Make an assessment</DarkGrayBut>
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
