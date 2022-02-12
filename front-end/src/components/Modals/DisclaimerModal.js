import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RedDelBut, BlueBut } from "../Button";
import { useNavigate } from "react-router-dom";


function DisclaimerModal() {
  let navigate = useNavigate(); 
  const [open, setOpen] = useState(true);
  const isAccept = () => {
    localStorage.setItem("acceptDisclaimer", true);
    setOpen(false);
  }
  const backHome = () =>{ 
    navigate('/Home');
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
            width: 700,
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
              MOOD MENT CHECK IN เป็นเครื่องมือประเมินสุขภาพจิตเบื้องต้น
              และคัดกรองความเสี่ยงต่อปัญหาสุขภาพจิตจากสถานการณ์ COVID-19
              มีวัตถุประสงค์เพื่อช่วยให้บุคลากรสาธารณสุข, อสม., จิตอาสา
              ใช้ประเมินค้นหากลุ่มเสี่ยงต่อปัญหาสุขภาพจิตมาดูแล
              ตลอดจนประชาชนสามารถประเมินสุขภาพจิตตนเองและเข้าถึงบริการได้อย่างรวดเร็ว
              การประเมินประกอบไปด้วย 5 ส่วนคือ ข้อมูลทั่วไป, แบบประเมินพลังใจ,
              ภาวะเหนื่อยล้าหมดไฟ, ความเครียด, ภาวะซึมเศร้า,
              ความเสี่ยงต่อการฆ่าตัวตาย ซึ่งเป็นการประเมินที่ไม่มีค่าใช้จ่ายใดๆ
              โปรดอ่านคำถามโดยละเอียด และตอบคำถามให้ครบถ้วน
            </p>

            <p>
              ทั้งนี้หากผลการประเมินของท่านพบว่ามีความเสี่ยงต่อปัญหาสุขภาพจิต
              จะมีการขอความยินยอมในการให้ข้อมูลส่วนบุคคลอีกครั้ง
              เพื่อการติดตามดูแลโดยเจ้าหน้าที่สาธารณสุข หากท่านไม่ยินยอม
              ท่านยังคงมีสิทธิในการใช้บริการดูแลจิตใจแบบออนไลน์อื่นๆ ได้
              ข้อมูลที่รวบรวมไว้จะมีการใช้เพื่อประมวลผลประกอบการเฝ้าระวังสถานการณ์สุขภาพจิต
              และการประเมินผลการพัฒนางานวิชาการด้านการดูแลฟื้นฟูเยียวยาจิตใจ
              และการเสริมสร้างพลังใจผู้ได้รับผลกระทบทางจิตใจจากสถานการณ์ระบาดของโรคติดเชื้อไวรัสโคโรน่า
              2019 และจะถูกเก็บรักษาเป็นความลับตามจรรยาบรรณวิชาชีพ
              ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) พ.ศ.2562 <br/>
              <a
                href="https://checkin.dmh.go.th/privacy-policy.php"
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
              "ยอมรับ"
            </BlueBut>

            <RedDelBut
              onClick={backHome}
              sx={{
                width: "20%",
                mx: 1,
              }}
            >
              "ไม่ยอมรับ"
            </RedDelBut>
            <Divider sx={{ my: 1.5 }} />
          </Box>
          <a
            href="https://checkin.dmh.go.th/privacy-policy.php"
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
