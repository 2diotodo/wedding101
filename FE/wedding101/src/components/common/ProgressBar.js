import { Step, Stepper, StepLabel } from "@mui/material";

function ProgressBar (props){

    return(
        <div>
          <Stepper activeStep={props.steps} alternativeLabel>
            {props.steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
    );
}

export default ProgressBar;