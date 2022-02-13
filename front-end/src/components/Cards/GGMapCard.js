import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function GGMapCard({data}) {
  console.log(data)
  return (
    <Card sx={{ ml: 3, boxShadow: "none", height: "fit-content" }}>
      <CardActionArea>
        <iframe
        title={data.name}
          width="450"
          height="250"
          frameBorder="0"
          style={{border:0}}
          src={`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&hl=es;z=14&amp&output=embed`}
          allowFullScreen
        ></iframe>
        {/* <CardMedia
          component="img"
          height="300"
          image="https://tips.thaiware.com/upload_misc/tips/2020_11/images/1433_20111714250002_67.png"
        /> */}
        <CardContent
          sx={{
            padding: "10px 20px",
            minHeight: "90px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <h3 style={{ margin: "0px" }}>
              {data.name ? data.name.length <= 40
                ? `${data.name}`
                : `${data.name.substring(0, 70)}` : null}
            </h3>
            <p style={{ margin: "0px", lineBreak: "auto" }}>{data.address} {data.province}</p>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
