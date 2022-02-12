import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QuestionCardList from "./components/QuestionCardList";
import { DarkGrayBut } from "../../components/Button";
import DisclaimerModal from "../../components/Modals/DisclaimerModal"

function Assessment() {

  function actionClick() {
    console.log("Submit");
  }
  
  const lightTheme = createTheme({ palette: { mode: "light" } });
  const questions = [
    {
      id: "1",
      question:
        "ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่",
    },
    {
      id: "2",
      question:
        "ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่",
    },
  ];

  return (
    
    <div className="background-color-gray">
      <DisclaimerModal />
      <Grid container justifyContent="center">
        <Grid item xs={10} style={{ textAlign: "right" }}>
          <h1 style={{ marginBottom: 0 }}>{questions.length || 0}Q</h1>
          <p style={{ margin: 0 }}>แบบคัดกรองโรคซึมเศร้า </p>
          <p style={{ marginTop: 0 }}>{questions.length || 0} คำถาม </p>
        </Grid>
        <Grid item xs={10}>
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                display: "grid",
                gap: 4,
              }}
            >
              {/* ------------ Loop All Question --------------- */}
              {questions.map((question) => (
                <QuestionCardList key={question.id} question={question} />
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
        
      </Grid>
      <div style={{ paddingTop: 20, paddingBottom: 50, textAlign: "center" }}>
        <DarkGrayBut style={{ minWidth: "150px" }} onClick="actionClick">
          Submit
        </DarkGrayBut>
      </div>
    </div>
  );
}

export default Assessment;
