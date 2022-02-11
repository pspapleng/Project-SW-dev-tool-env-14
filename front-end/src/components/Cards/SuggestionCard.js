import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function SuggestionCard() {
  const textTest = "สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์";
  return (
    <Card sx={{ maxWidth: 300, boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image="https://image.makewebeasy.net/makeweb/0/hxxlTCtx0/DefaultData%2Fdmh1_2.jpg?v=202012190947"
          alt="green iguana"
        />
        <CardContent style={{ padding: "10px"}}>
          <Box sx={{ width: "100%" }}>
            <Grid container style={{ fontWeight: "bold", flex: 1 }}>
              <Grid item xs={6} >
                <h3 style={{ margin: "0px" }}>{textTest.length < 30
              ? `${textTest}`
              : `${textTest.substring(0, 30)}...`} </h3>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                xx km away
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
