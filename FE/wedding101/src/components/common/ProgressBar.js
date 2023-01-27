import { Step, Stepper, StepLabel } from "@mui/material";

function ProgressBar (){

    const steps = [
        'STEP1',
        'STEP2',
        'STEP3',
        'STEP4',
      ];

    return(
        <div>
            <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
        </div>
    );
}

export default ProgressBar;