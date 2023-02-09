import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/system';
import './UserMyPage.css';

function UserMyPage() {
    return (
        <div className='user-mypage'>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                    <h1>My Page</h1>
                </Grid2>
                
                <Box xs={9} sx={{flexGrow: 1}}>
                 <Grid2 container spacing={2}>
                    <Grid2  xs={6}>
                        <div>1번</div>
                    </Grid2>
                    <Grid2  xs={6}>
                        <div>2번</div>
                    </Grid2>
                    <Grid2  xs={6}>
                        <div>3번</div>
                    </Grid2>
                    <Grid2  xs={6}>
                        <div>4번</div>
                    </Grid2>

                </Grid2>
                </Box>
                
            </Grid2>
        </div>
    );
}
export default UserMyPage;