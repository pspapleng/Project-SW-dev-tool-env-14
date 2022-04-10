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
// import { useNavigate } from "react-router-dom";

//Import axios
import request from '../../services/api/auth'

function ResultModal({ result }) {
  const [open, setOpen] = useState(true);
  const [serviceCenter, setServiceCenter] = useState([]);
  const handleClose = () => setOpen(false);
  // const navigate = useNavigate();
  const handleOnClick = useCallback(
    (id) => (window.location.href =`/ServiceCenterInfo/${id}`, { serviceCenterId: id }),
    []
  );

  useEffect( () => {
   const fetchMyAPI = async (lat, lon) => {
     const response = await request.getServiceCenterByLocation(lat, lon)
     console.log(response)
      for (let index = 0; index < 2; index++) {
        let prevNum = null
        let rand = Math.floor(Math.random() * response.data.length)
        while (true) {
          rand = Math.floor(Math.random() * response.data.length)
          if(rand !== prevNum || prevNum === null){
            break
          }
        }
        setServiceCenter(oldArray => [...oldArray, response.data[rand]]);
        console.log(response.data[rand])
      }
      return response
    }
    const {latitude, longitude} = JSON.parse(localStorage.getItem("userLocation"))
    fetchMyAPI(latitude, longitude)
  }, []);

  const toService = (id) => {
    handleClose();
    handleOnClick(id);
  };

  const backToHome = () => {
    window.location = "/";
  };

  return (
    <div>
      {/* <DarkGrayBut onClick={handleOpen} >result modal</DarkGrayBut> */}
      <Modal open={open} >
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
          {result ? (
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
                {/* <span>แบบประเมินโรคซึมเศร้า 9Q</span> */}
                <a
                  href="*"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ fontWeight: "bold"}}
                >
                  แบบประเมินโรคซึมเศร้า 9Q
                </a>
              </p>
            </Box>
          ) : (
            <Box
              sx={{
                mt: 2,
                Color: "#000",
                opacity: "0.67",
                fontSize: 22,
              }}
            >
              ไม่มีความเสี่ยง หรือ <br /> แนวโน้มที่จะเป็นโรคซึมเศร้า
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <LightGrayBut
              onClick={backToHome}
              style={{ marginLeft: "5px", marginRight: "5px", width: "20%" }}
            >
              Back to Home
            </LightGrayBut>
            {result ? (
              <DarkGrayBut
                style={{ marginLeft: "5px", marginRight: "5px", width: "20%" }}
                onClick={() => console.log("Not Avalible")}
              >
                Next to 9Q
              </DarkGrayBut>
            ) : (
              false
            )}
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

          { serviceCenter.length > 0 ?
          serviceCenter.map((service, index) => {
            return (
            <Card
              onClick={() => toService(service.id)}
              key={index}
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
                <Grid container style={{ flex: 1 }}>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      style={{width: 150, height: 150, objectFit: 'cover'}}
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
                          width={'100%'}
                          sx={{ fontWeight: "bold" }}
                        >
                          {service.name}
                        </Typography>
                          <Typography
                            style={{ display: "flex", alignItems: "flex-end" }}
                          >
                            {service.type === 'ONLINE' ? false : service.province}
                            <br />
                            {service.distance > -1 & service.type !== 'ONLINE'
                              ? `${(service.distance/1000).toFixed(2)} km. away`
                              : ""}
                          </Typography>
                          {service.type === 'ONLINE' ? 'Online' : service.type === 'BOTH' ? 'Online and On Site' : 'On Site'}
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
            </Card>
          )})
          :
          false
          }
        </Box>
      </Modal>
    </div>
  );
}

export default ResultModal;
