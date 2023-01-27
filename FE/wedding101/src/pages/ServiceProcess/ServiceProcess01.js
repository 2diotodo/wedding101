import './ServiceProcess01.css';

import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';

function ServiceProcess01() {
  return (
    <div className='service-process01'>
      <Grid2 container spacing={2}>
        <Grid2 xs={3}>
          <h1>Service Application</h1>
        </Grid2>

        <Grid2 xs={9}>
          <ProgressBar />

          <Button variant='contained'>확인</Button>
          <Button variant='contained'>취소</Button>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ServiceProcess01;