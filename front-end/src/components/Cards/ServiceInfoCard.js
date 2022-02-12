import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function ServiceInfoCard({data:{ name, locaion, cost, contact, description, imageUrl }}) {
  const contentStyle = {
    margin: "0px",
    lineBreak: "auto",
    fontSize: 18,
    marginTop: 20,
    color: '#797979',
    display: 'flex',
  }
  const infoText = {
    color: 'black',
  }

  return (
    <Card sx={{ display: "flex", padding:"20px", boxShadow: "none"  }}>
      <Box>
        <Grid container style={{ flex: 1 }}>
          <Grid item xs={7}>
            <CardMedia
              component="img"
              height="400"
              width='100%'
              image={imageUrl ? imageUrl : "https://cr.lnwfile.com/2p7f81.jpg"}
            />
          </Grid>
          <Grid item xs={5} sx={{paddingLeft: 5}}>
              <CardContent sx={{textAlign:'left', padding:"0px" }}>
                <Typography component="div" variant="h5" sx={{fontWeight: 'bold', fontSize: 36, marginBottom: 3}}>
                  { name }
                </Typography>
                  <div style={contentStyle}>
                    Location:
                  <span style={infoText}>{ locaion ? ` ${locaion}` : ' Online'}</span>
                  </div>
                  <div style={contentStyle}>
                    Cost:
                  <span style={infoText}>{cost || '-'}</span>
                  </div>
                  <div style={contentStyle}>
                    Contract:
                  <span style={infoText}>{ contact || '-'}</span>
                  </div>
                  <div style={contentStyle}>
                    Description:
                  <span style={infoText}>{ description || '-'}</span>
                  </div>
              </CardContent>

          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
