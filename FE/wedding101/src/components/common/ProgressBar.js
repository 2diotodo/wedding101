import { Step, Stepper, StepLabel } from "@mui/material";

function ProgressBar (props){

    const steps = [
        'STEP1',
        'STEP2',
        'STEP3',
        'STEP4',
      ];

    return(
        <div>
          <Stepper activeStep={props.steps} alternativeLabel>
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