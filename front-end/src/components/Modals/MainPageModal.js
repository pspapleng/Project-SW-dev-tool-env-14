import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function Home() {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{ width: 600, bgcolor: "background.paper", p: 4, position: 'absolute', top: '50%', left: '50%', borderRadius: '15px', textAlign: 'center'}}>
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
                sx={{ mt: 2, Color: "#595959", opacity: "0.67" }}
              >
                คำอธิบายเกี่ยวกับแบบประเมิน
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "15px",
                  marginTop: "10%",
                  textTransform: "none",
                  backgroundColor: "#595959",
                  width: '30%',
                  height: '20%',
                  opacity: '0.67'
                }}
                className="button-modal"
              >
                Start an assessment
              </Button>
            </Box>
          </Modal>
        </div>
    
  );
}

export default Home;
