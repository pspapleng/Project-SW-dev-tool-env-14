import React, { useEffect, useState, useCallback } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { DarkGrayBut, LightGrayBut } from "../Button";
import {useNavigate} from 'react-router-dom';

function ResultModal({ isActive }) {
  const [open, setOpen] = useState(isActive);
  const [serviceCenter, setServiceCenter] = useState([]);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => navigate(`/ServiceCenterInfo/${id}`, {replace: true}), [navigate]);


  useEffect(() => {
    setServiceCenter([{id:1, name: 'Paolo', location: 'Bangkok', imageUrl: '', distanct: 0},{id:2, name: 'Rama9', location: 'Bangkok', imageUrl: '', distanct: 10}]);
  }, []);

  const toService = (id) => {
    handleClose()
    handleOnClick(id)
  }

  const backToHome = () => {
    window.location.href = "/";
  }

  return (
    <div>
      {/* <DarkGrayBut onClick={handleOpen} >result modal</DarkGrayBut> */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 800,
            bgcolor: "#f4f4f4",
            px: 10,
            py: 3,
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
            sx={{ fontSize: 28, fontWeight: "bold" }}
          >
            การแปลผลประเมิน
          </Typography>
          <Box
            // id="modal-modal-description"
            sx={{
              mt: 2,
              Color: "#000",
              opacity: "0.67",
              fontSize: 22,
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
          </Box>
          <Box sx={{ mt: 2 }}>
            <LightGrayBut
              onClick={backToHome}
              style={{ marginLeft: "5px", marginRight: "5px", width: "20%" }}
            >
              Back to Home
            </LightGrayBut>
            <DarkGrayBut
              style={{ marginLeft: "5px", marginRight: "5px", width: "20%" }}
              onClick={() => console.log("Not Avalible")}
            >
              Next to 9Q
            </DarkGrayBut>
            <Divider sx={{ my: 1.5 }} />
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 22, fontWeight: "bold" }}
          >
            สถานที่ให้บริการที่แนะนำสำหรับคุณ
          </Typography>

          {serviceCenter.map((service, index) => 
              <Card
                onClick={() => toService(service.id)}
                key={index}
                sx={{
                  display: "flex",
                  padding: "20px",
                  boxShadow: "none",
                  transition: 'background-color 500ms',
                  mt: 2,
                  ':hover': {
                    bgcolor: 'lightgray',
                    // opacity: .6,
                    cursor: 'pointer',
                    transition: 'background-color 500ms'
                  },
                }}
              >
                <Box>
                  <Grid container style={{ flex: 1 }}>
                    <Grid item xs={6}>
                      <CardMedia
                        component="img"
                        height="100"
                        width="100%"
                        image={service.imageUrl ? service.imageUrl : 'https://cr.lnwfile.com/2p7f81.jpg'}
                        alt="Live from space album cover"
                      />
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft: 20 }}>
                      <CardContent sx={{ padding: "0px" }}>
                        <Box sx={{ textAlign: "left" }}>
                          <Typography
                            component="div"
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                          >
                            {service.name}
                          </Typography>
                          {
                            service.location ? 
                            <Typography style={{display: 'flex', alignItems: 'flex-end'}}>
                              { service.location }
                              <br/>
                              { service.distanct > -1 ? `${service.distanct} km. away` : ''} 
                            </Typography>
                            :
                            'Online'
                          }
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
