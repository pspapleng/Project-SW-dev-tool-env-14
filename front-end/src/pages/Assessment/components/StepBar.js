import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

const steps = ['ไม่มีเลย', 'เป็นบางวัน (1-7 วัน)', 'เป็นบ่อย (> 7 วัน)', 'เป็นทุกวัน'];

export default function StepBar() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} nonLinear alternativeLabel={true} >
        {steps.map((label, index) => (
          <Step key={label} >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>ตอบ {activeStep + 1}</Typography>
          </React.Fragment>
      </div>
    </Box>
  );
}