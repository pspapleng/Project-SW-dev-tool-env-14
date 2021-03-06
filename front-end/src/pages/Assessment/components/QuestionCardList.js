import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Radios from "./Radios";
// import StepBar from "./StepBar";

function QuestionCardList({question, onSelect}) {
  // const question = 
  //   {
  //       "id": "1",
  //       "question": "ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่"

  //   }
  const Item = styled(Paper)(({ theme }) => ({
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none",
    color: theme.palette.text.secondary,
    height: "100%",
    justifyContent: "center",
  }));

  return (
    <Item sx={{px: 5}}>
      <h3 style={{color: '#595959', opacity: .67}}>
        {`Q${question.id}`}
        {`: ${question.question}`}
      </h3>
      <div style={{paddingBottom: "10px"}}>
        {/* ------  Radio & Step-Bar -------- */}
        <Radios onSelect={{onSelect}} />
        {/* <StepBar /> */}
      </div>
    </Item>
  );
}

export default QuestionCardList;
