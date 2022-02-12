import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useNavigate } from 'react-router-dom';
import { DarkGrayBut } from "../Button";

function MainPageModal() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const navigate = useNavigate();
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
          <Typography
                id="modal-modal-description"
                sx={{ mt: 2, opacity: "0.67" }}
              >
                <p>คำอธิบายเกี่ยวกับแบบประเมิน</p>
                <DarkGrayBut onClick={nextToAssessment} style={{fontWeight: 'bold', padding: '10px 25px', marginTop: 30}}>Start an assessment</DarkGrayBut>
              </Typography>
           
              
        </Box>
      </Modal>
    </div>
  );
}

export default MainPageModal;
