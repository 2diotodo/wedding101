import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import UserModifyForm from '../../../components/user/UserModify/ModifyForm'
import InfoModifyForm from '../../../components/WeddingInvitation/InfoModify/ModifyForm'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './UserMyPage.css';
import { Button } from '@mui/material';

function UserMyPage() {
    const [userModifyOpen, setUserModifyOpen] = useState(false);
    const openUserModal = () => {
        if(userModifyOpen === false) {
            setInfoModifyOpen(false);
        }
        setUserModifyOpen((userModifyOpen) => !userModifyOpen);
        
    }

    const [infoModifyOpen, setInfoModifyOpen] = useState(false);
    const openInfoModal = () => {
        if(infoModifyOpen === false) {
            setUserModifyOpen(false);
        }
        setInfoModifyOpen((infoModifyOpen) => !infoModifyOpen);
    }

    const navigate = useNavigate();

    const toModifyInfoPage = ()=> {
        navigate('/info/modify')
    }

    return (
        <div className='user-mypage'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} xs={0}>
                    <h1>My Page</h1>
                </Grid2>
                
                <Grid2 lg={9} xs={12}>
                    <div className='user-mypage-items'>
                        <Grid2 container spacing={5}> 
                                <Grid2 xs={6}>
                                    <Button 
                                        color='primary'
                                        variant='contained'
                                        size='small'
                                        sx={{ width: 200, padding: 1, margin: 2 }}
                                        onClick={openUserModal}>내 정보</Button>
                                </Grid2>
                                <Grid2 xs={6}>
                                    <Button 
                                        color='primary'
                                        variant='contained'
                                        size='small'
                                        sx={{ width: 200, padding: 1, margin: 2 }}
                                        onClick={openInfoModal}>결혼정보</Button>
                                </Grid2>
                        </Grid2>
                    </div>
                    {userModifyOpen ? <UserModifyForm /> : null}
                    {infoModifyOpen ? <InfoModifyForm /> : null}
                </Grid2>
                
            </Grid2>

            
        </div>
    );
}
export default UserMyPage;