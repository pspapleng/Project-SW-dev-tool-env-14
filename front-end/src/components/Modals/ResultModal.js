import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { DarkGrayBut, LightGrayBut} from "../Button";
function ResultModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <DarkGrayBut onClick={handleOpen} >result modal</DarkGrayBut>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 800,
            bgcolor: "#f4f4f4",
            p: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 18, fontWeight: "bold" }}
          >
            การแปลผลประเมิน
          </Typography>
          <Typography
            // id="modal-modal-description"
            sx={{
              mt: 2,
              Color: "#000",
              opacity: "0.67",
              // textAlign: "center",
            }}
          >
            เป็นผู้มีความเสี่ยง หรือ <br /> มีแนวโน้มที่จะเป็นโรคซึมเศร้า
            <p>
              แนะนำให้ประเมินต่อด้วย&nbsp;
              <a
                href="https://checkin.dmh.go.th/privacy-policy.php"
                target="_blank"
                rel="noreferrer"
                sx={{ fontWeight: "bold" }}
              >
                แบบประเมินโรคซึมเศร้า 9Q
              </a>
            </p>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <LightGrayBut style={{marginLeft: '5px',marginRight: '5px', width: '20%'}}>Back to Home</LightGrayBut>
            <DarkGrayBut style={{marginLeft: '5px',marginRight: '5px', width: '20%'}}>Next to 9Q</DarkGrayBut>
            <Divider sx={{ my: 1.5 }} />
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 18, fontWeight: "bold" }}
          >
            สถานที่ให้บริการที่แนะนำสำหรับคุณ
          </Typography>

          <Card
            sx={{ display: "flex", padding: "20px", boxShadow: "none", mt: 2 }}
          >
            <Box>
              <Grid container style={{ flex: 1 }}>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="100"
                    width="100%"
                    image="https://image.makewebeasy.net/makeweb/0/hxxlTCtx0/DefaultData%2Fdmh1_2.jpg?v=202012190947"
                    alt="Live from space album cover"
                  />
                </Grid>
                <Grid item xs={6} style={{ paddingLeft: 20 }}>
                  <CardContent sx={{ padding: "0px" }}>
                    <Box sx={{textAlign: 'left'}}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{ fontWeight: "bold" }}
                      >
                        Name
                      </Typography>
                      <Typography component="div">
                        Online <br />0 km.
                      </Typography>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
