import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

export default function ServiceInfoCard() {

  return (
    <Card sx={{ display: "flex", padding:"20px", boxShadow: "none"  }}>
      <Box >
        <Grid container style={{ flex: 1 }}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              height="400"
              width='100%'
              image="https://image.makewebeasy.net/makeweb/0/hxxlTCtx0/DefaultData%2Fdmh1_2.jpg?v=202012190947"
              alt="Live from space album cover"
            />
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: 20 }}>
              <CardContent sx={{padding:"0px" }}>
                <Typography component="div" variant="h5">
                  Name
                </Typography>
                <p style={{ margin: "0px", lineBreak: "auto" }}>
                  Location / Online
                </p>
                <p style={{ margin: "0px", lineBreak: "auto" }}>Cost</p>
                <p style={{ margin: "0px", lineBreak: "auto" }}>Contact</p>
                <p style={{ margin: "0px", lineBreak: "auto" }}>Description</p>
              </CardContent>

          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
