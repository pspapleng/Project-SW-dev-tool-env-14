import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function GGMapCard() {
  const textTest = "สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์";
  const location = "75, 1 ถนน พระรามที่ ๖ แขวง ทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400"
  
  return (
    <Card sx={{ ml:3, boxShadow: "none", height: 'fit-content' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://tips.thaiware.com/upload_misc/tips/2020_11/images/1433_20111714250002_67.png"
        />
        <CardContent sx={{ padding: "10px 20px", minHeight: "90px", alignItems: 'center', display: 'flex' }}>
        <Box sx={{ width: "100%" }}>
        <h3 style={{ margin: "0px" }}>
            {textTest.length <= 40
              ? `${textTest}`
              : `${textTest.substring(0, 40)}...`}
          </h3>
          <p style={{ margin: "0px", lineBreak: "auto" }}>
            {location}
          </p>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
