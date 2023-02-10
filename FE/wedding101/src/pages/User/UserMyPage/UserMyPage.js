import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import UserModifyForm from '../../../components/user/UserModify/ModifyForm';
import InfoModifyForm from '../../../components/weddingInfo/InfoModify/ModifyForm';
import { useState } from 'react';
import './UserMyPage.css';


function UserMyPage() {
    const [modifyOpen, setModifyOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <div className='user-mypage'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} xs={0}>
                    <h1>My Page</h1>
                </Grid2>
                
                <Grid2 lg={9} xs={12}>
                    <div className='user-mypage-items'>
                        <Grid2 container spacing={5}> 
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type='text' onClick={()=> {setModifyOpen(!modifyOpen)}}>내 정보</button>
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type="text" onClick={()=> {setInfoOpen(!infoOpen)}}>결혼 정보</button>
                                </Grid2>
                            </div>
                        </Grid2>
                    </div>
                    {modifyOpen === true? <UserModifyForm /> : null}
                    {infoOpen === true? <InfoModifyForm /> : null}
                </Grid2>
            </Grid2>

            
            
        </div>
    );
}
export default UserMyPage;