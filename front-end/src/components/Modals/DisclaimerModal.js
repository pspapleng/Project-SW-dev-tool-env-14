import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RedDelBut, BlueBut } from "../Button";
// import { useNavigate } from "react-router-dom";


function DisclaimerModal() {
  // let navigate = useNavigate(); 
  const [open, setOpen] = useState(true);
  const isAccept = () => {
    localStorage.setItem("acceptDisclaimer", true);
    setOpen(false);
  }
  const backHome = () =>{ 
    window.location = '/Home';
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backdrop="static"
        keyboard="false"
      >
        <Box
          sx={{
            width: '50%',
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
            sx={{ color: "#31708f", fontSize: 28, fontWeight: "bold" }}
          >
            ข้อกำหนดและเงื่อนไข
          </Typography>
          <Box
            id="modal-modal-description"
            sx={{
              mt: 2,
              Color: "#595959",
              opacity: "0.67",
              textAlign: "justify",
              textIndent: "5%",
            }}
          >
            <p>
            MoodMent Assessment เป็นเครื่องมือประเมินสุขภาพจิตเบื้องต้น และคัดกรองความเสี่ยงต่อปัญหาสุขภาพจิต 
            มีวัตถุประสงค์เพื่อช่วยให้บุคคลทั่วไปสามารถประเมินสุขภาพจิตตนเองได้อย่างรวดเร็ว 
            การประเมินประกอบไปด้วย 2 ส่วนคือ แบบประเมินภาวะซึมเศร้า และแบบประเมินความเสี่ยงต่อการฆ่าตัวตาย 
            ซึ่งเป็นการประเมินที่ไม่มีค่าใช้จ่ายใดๆ โปรดอ่านคำถามโดยละเอียด และตอบคำถามตามความรู้สึกจริงอย่างครบถ้วน
            </p>

            <p>
            ถ้าหากผลการประเมินของคุณพบว่ามีความเสี่ยงต่อปัญหาสุขภาพจิต การตรวจรักษาเพิ่มเติมหรือการเข้ารับคำปรึกษาจากแพทย์
            จะช่วยให้สามารถวินิจฉัยและทำการรักษาได้อย่างถูกต้อง และเราได้ทำการรวบรวมสถานที่ให้บริการด้านสุขภาพจิตไว้ใน
            เว็บไซต์ของเราเพื่อให้การค้นหาของคุณเป็นไปอย่างสะดวกและรวดเร็ว ทั้งนี้จะไม่มีการเก็บหรือนำข้อมูลผลการประเมินของคุณไปใช้ 
            และจะเก็บรักษาข้อมูลเป็นความลับตามจรรยาบรรณวิชาชีพ ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ.2562<br/>
              <a
                href="https://ict.dmh.go.th/events/events/files/4.1%20checkin.pdf"
                target="_blank"
                rel="noreferrer"
              >
                (อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคลของกรมสุขภาพจิต)
              </a>
            </p>
          </Box>
          <Box
            sx={{ fontWeight: "bold", fontSize: 18, color: "#a94442"}}
          >
            <p>ท่านยอมรับเงื่อนไขหรือไม่?</p>

            <BlueBut
              onClick={isAccept}
              sx={{
                width: "20%",
                mx: 1,
              }}
            >
              ยอมรับ
            </BlueBut>

            <RedDelBut
              onClick={backHome}
              sx={{
                width: "20%",
                mx: 1,
              }}
            >
              ไม่ยอมรับ
            </RedDelBut>
            <Divider sx={{ my: 1.5 }} />
          </Box>
          <a
            href="https://ict.dmh.go.th/events/events/files/4.1%20checkin.pdf"
            target="_blank"
            rel="noreferrer"
          >
            อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคล <br /> (Personal Data Protection
            Policy)
          </a>
        </Box>
      </Modal>
    </div>
  );
}

export default DisclaimerModal;
