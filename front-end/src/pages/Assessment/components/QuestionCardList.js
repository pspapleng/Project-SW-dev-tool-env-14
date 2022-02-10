import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Radios from "./Radios";
import StepBar from "./StepBar";

function QuestionCardList({ question }) {
  const Item = styled(Paper)(({ theme }) => ({
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none",
    color: theme.palette.text.secondary,
    height: "100%",
    justifyContent: "center",
  }));

  return (
    <Item>
      <h4>
        {`Q${question.id}`}
        {`: ${question.question}`}
      </h4>
      <div style={{paddingBottom: "10px"}}>
        {/* ------  Radio & Step-Bar -------- */}
        <Radios />
        <StepBar />
      </div>
    </Item>
  );
}

export default QuestionCardList;
