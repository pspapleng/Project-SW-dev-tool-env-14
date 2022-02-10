import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

function ResultModal() {
  const [openResult, setOpenResul] = React.useState(false);
//   const handleOpenResul = () => setOpenResul(true);
  const handleCloseResul = () => setOpenResul(false);
  return (
    <div>
      <Modal
        open={openResult}
        onClose={handleCloseResul}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: 800, bgcolor: "#f4f4f4", p: 2 }}
          className="style-modal-assessment"
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
            id="modal-modal-description"
            sx={{
              mt: 2,
              Color: "#000",
              opacity: "0.67",
              textAlign: "center",
              textIndent: "5%",
            }}
          >
            เป็นผู้มีความเสี่ยง หรือ <br /> มีแนวโน้มที่จะเป็นโรคซึมเศร้า
            <p>
              แนะนำให้ประเมินต่อด้วย&nbsp;
              <a
                href="https://checkin.dmh.go.th/privacy-policy.php"
                target="_blank"
                rel="noreferrer"
                sx={{fontWeight: 'bold'}}
              >
                แบบประเมินโรคซึมเศร้า 9Q
              </a>
            </p>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "15px",
                textTransform: "none",
                ml: 2,
                backgroundColor: "#c4c4c4",
                width: "25%",
                height: "20%",
                opacity: 1,
              }}
            >
              Back to Home
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: "15px",
                textTransform: "none",
                ml: 2,
                backgroundColor: "#828282",
              }}
              className="button-result-modal"
            >
              Next to 9Q
            </Button>
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
                    <Box>
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
