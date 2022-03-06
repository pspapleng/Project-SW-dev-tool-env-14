import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import { useNavigate } from 'react-router-dom';
import { DarkGrayBut } from "../Button";
// import { Alert, Snackbar } from "@mui/material";
import AlertModal from "./AlertModal"

function MainPageModal() {
  const [alert, setAlert] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const navigate = useNavigate();
  const nextToAssessment = () =>{
    if (localStorage.getItem("userLocation")) {
      window.location.href = '/Assessment';
    } else {
      setAlert(true);
    }
    
  }
  const closeAlert = (closeAlert) => {
    setAlert(closeAlert)
  }

  return (
    <div>
        {alert ? <AlertModal alert={alert} closeAlert={closeAlert}/> : false}
      <Modal
        open={true}
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
            sx={{ color: "#595959", fontSize: 32, fontWeight: "bold" }}
          >
            แบบประเมินคัดกรองโรคซึมเศร้า 2 คำถาม
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
                <p>การทำแบบคัดกรองโรคซึมเศร้า 2 คำถาม นั้นมีจุดประสงค์เพื่อให้คุณสามารถประเมินสุขภาพจิตในระดับเบื้องต้นได้ด้วยตนเอง โปรดอ่านคำถามโดยละเอียด และตอบคำถามตามความรู้สึกจริงอย่างครบถ้วน</p>
                <DarkGrayBut onClick={nextToAssessment} style={{fontWeight: 'bold', padding: '10px 25px', marginTop: 30}}>Start an assessment</DarkGrayBut>
              </Typography>
           
              
        </Box>
      </Modal>
    </div>
  );
}

export default MainPageModal;
