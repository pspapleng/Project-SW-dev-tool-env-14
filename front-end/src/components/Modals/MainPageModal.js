import React from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useNavigate } from 'react-router-dom';
import { DarkGrayBut } from "../Button";

function MainPageModal() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();
  const nextToAssessment = () =>{
    navigate('/Assessment');
  }
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backdrop="static"
        keyboard="false"
      >
        <Box
          sx={{
            width: 600,
            height: "40vh",
            bgcolor: "background.paper",
            p: 4,
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
            sx={{ color: "#595959", fontSize: 38, fontWeight: "bold" }}
          >
            แบบประเมิน
            <Divider
              sx={{
                mx: 27,
                color: "#595959",
                borderBottomWidth: "initial",
              }}
            />
          </Typography>
          <Grid id="top-row" container sx={{ justifyContent: "center" }}>
            <Grid item xs={6}>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, Color: "#595959", opacity: "0.67" }}
              >
                <p>คำอธิบายเกี่ยวกับแบบประเมิน</p>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            id="bottom-row"
            container
            sx={{ justifyContent: "center", mt: "20%" }}
          >
            <Grid item xs={6}>
              <DarkGrayBut onClick={nextToAssessment}>Start an assessment</DarkGrayBut>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default MainPageModal;
