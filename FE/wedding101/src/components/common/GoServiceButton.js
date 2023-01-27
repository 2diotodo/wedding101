import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

function GoServiceButton() {
  const navigate = useNavigate();
  const navigateToService = () => {
    navigate('/user/service01');
  };
  return (
    <Button
      variant='contained'
      sx={{ borderRadius: 50 }}
      color='secondary'
      onClick={navigateToService}
    >
      신청하러 가기
    </Button>
  );
}

export default GoServiceButton;
