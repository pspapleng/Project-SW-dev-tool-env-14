import React, { useEffect, useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function ServiceCenterCard({ data }) {
  const handleOnClick = useCallback(
    (id) => (
      (window.location.href = `/ServiceCenterInfo/${id}`),
      { serviceCenterId: id }
    ),
    []
  );

  return (
    <>
      {data.map((service, i) => (
        <Card
          id="service-card"
          className="services"
          onClick={() => handleOnClick(service.id)}
          key={i}
          sx={{
            display: "flex",
            padding: "20px",
            boxShadow: "none",
            transition: "background-color 500ms",
            mt: 2,
            ":hover": {
              bgcolor: "lightgray",
              cursor: "pointer",
              transition: "background-color 500ms",
            },
          }}
        >
          <Grid
            container
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 4fr 1fr",
            }}
          >
            <Grid item xs={3}>
              <CardMedia
                id="img-card"
                className="image"
                component="img"
                style={{ width: 150, height: 150, objectFit: "cover" }}
                image={
                  service.imageUrl
                    ? service.imageUrl
                    : "https://cr.lnwfile.com/2p7f81.jpg"
                }
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={7} style={{ paddingLeft: 20 }}>
              <CardContent sx={{ padding: "0px" }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    id="name-card"
                    className="name"
                    component="div"
                    width={"100%"}
                    sx={{
                      fontWeight: "bold",
                      paddingBottom: 2,
                      fontSize: "18px",
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    id="province-type-card"
                    className="province-type"
                    style={{ display: "flex", alignItems: "flex-end" }}
                  >
                    {service.province}
                    <br />
                    {service.type === "ONLINE"
                      ? "Online"
                      : service.type === "BOTH"
                      ? "Online and On Site"
                      : "On Site"}
                    <br />
                    10 reviews
                  </Typography>
                </Box>
              </CardContent>
            </Grid>
            <Grid item xs={7} style={{ justifySelf: "right" }}>
              {/* MdFavoriteBorder */}
              <MdFavorite
                style={{ fontSize: "25px" }}
                id="favorite-button"
                className="favorite"
              />
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
}

export default ServiceCenterCard;
