import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <div
      style={{
          height: "200px",
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* -------------------------------------------service center card-------------------------------------- */}
        <Card sx={{ borderRadius: "20px", margin: '0 0 30px 30px',width: '200px' }}>
          <CardActionArea>
            {/* if you want to add image, you will use CardMedia */}
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}

            <CardContent
              sx={{ backgroundColor: "#f5f5f5", height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#908E89", display: 'flex',
                flexDirection: 'column',
                textAlign: 'center' }}
              >
                Service center
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ backgroundColor: "#c4c4c4", height: '30px' }}
          ></CardActions>
        </Card>

        {/* -------------------------------------------Assessment card-------------------------------------- */}
        <Card sx={{ borderRadius: "20px", margin: '0 0 30px 30px',width: '200px' }}>
          <CardActionArea>
            {/* if you want to add image, you will use CardMedia */}
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}

            <CardContent
              sx={{ backgroundColor: "#f5f5f5", height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#908E89", display: 'flex',
                flexDirection: 'column',
                textAlign: 'center' }}
              >
                Assessment
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ backgroundColor: "#c4c4c4", height: '30px' }}
          ></CardActions>
        </Card>

        {/* -------------------------------------------Happy-Box card-------------------------------------- */}
        <Card sx={{ borderRadius: "20px", margin: '0 0 30px 30px',width: '200px' }}>
          <CardActionArea>
            {/* if you want to add image, you will use CardMedia */}
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}

            <CardContent
              sx={{ backgroundColor: "#f5f5f5", height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#908E89", display: 'flex',
                flexDirection: 'column',
                textAlign: 'center' }}
              >
                Happy-Box
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ backgroundColor: "#c4c4c4", height: '30px' }}
          ></CardActions>
        </Card>

        
      </div>
  );
}

export default Home;
