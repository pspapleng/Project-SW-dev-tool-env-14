import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Snackbar } from "@mui/material";

//Import Component 
import QuestionCardList from "./components/QuestionCardList";
import { DarkGrayBut } from "../../components/Button";
import DisclaimerModal from "../../components/Modals/DisclaimerModal";
import ResultModal from "../../components/Modals/ResultModal"

function Assessment() {
  const [disclaimer, setDisclaimer] = useState(false);
  const [assessChoice, setAssessChoice] = useState({});
  const [onInpError, setOnInpError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    setDisclaimer(localStorage.getItem("acceptDisclaimer"));
  }, []);

  function twoQ() {
    if ((assessChoice[1] === 0) & (assessChoice[2] === 0)) {
      return 0;
    } else if ((assessChoice[1] === 1 || assessChoice[2] === 1) && Object.keys(assessChoice).length === 2) {
      return 1;
    } else {
      return null
    }
  }

  function actionSubmit() {
    if(twoQ() === null){
      setOnInpError(true);
    }
    else{
      localStorage.setItem('doAssessment', true)
      setShowResult(true)
    }
  }

  const setChoice = (choice, id) => {
    let getChoice = assessChoice;
    getChoice[id] = choice;
    setAssessChoice(getChoice);
  };

  const ActiveResultModal = () => {
    return <ResultModal isActive={showResult}/>
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
      {disclaimer ? false : <DisclaimerModal />}
      <ActiveResultModal/>
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
                <QuestionCardList
                  onSelect={(choice) => {
                    setChoice(choice, question.id);
                  }}
                  key={question.id}
                  question={question}
                />
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
      <div style={{ paddingTop: 20, paddingBottom: 50, textAlign: "center" }}>
        <DarkGrayBut onClick={actionSubmit} style={{ minWidth: "150px" }}>
          Submit
        </DarkGrayBut>
      </div>
      <Snackbar
        open={onInpError}
        autoHideDuration={3000}
        onClose={() => setOnInpError(false)}
      >
        <Alert
          onClose={() => setOnInpError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          กรุณาใส่ข้อมูลให้ครบ
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Assessment;
