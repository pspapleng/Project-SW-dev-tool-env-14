import React, { useEffect, useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { MdFavorite } from "react-icons/md";

function ServiceCenterCard({data}) {
    return(
        <>
        
        {data.map((service, i) => (
            <Card
                key={i}
                // onClick={() => toService(service.id)}
                // key={index}
                sx={{
                  display: "flex",
                  padding: "20px",
                  boxShadow: "none",
                  transition: "background-color 500ms",
                  mt: 2,
                  ":hover": {
                    bgcolor: "lightgray",
                    // opacity: .6,
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
                          className="rName"
                          component="div"
                          variant="h5"
                          width={"100%"}
                          sx={{ fontWeight: "bold", paddingBottom: 2 }}
                        >
                          {service.name}
                        </Typography>
                        <Typography
                          style={{ display: "flex", alignItems: "flex-end" }}
                        >
                          {service.type === 'ONLINE' ? false : service.province}
                          <br />
                          {service.type === 'ONLINE' ? 'Online' : service.type === 'BOTH' ? 'Online and On Site' : 'On Site'}
                          <br />
                          {/* {service.distance > -1 & service.type !== 'ONLINE'
                              ? `${(service.distance/1000).toFixed(2)} km. away`
                              : ""} */}
                          10 reviews
                        </Typography>
                       
                      </Box>
                    </CardContent>
                  </Grid>
                  <Grid item xs={7} style={{ justifySelf: "right" }}>
                    <MdFavorite style={{ fontSize: "25px"}}/>
                  </Grid>
                </Grid>
              </Card>
        ))}
        </>
    )
    
}

export default ServiceCenterCard;