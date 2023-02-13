import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import UserModifyForm from '../../../components/user/UserModify/ModifyForm'
import InfoModifyForm from '../../../components/WeddingInvitation/InfoModify/ModifyForm'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './UserMyPage.css';
import { Modal } from '@mui/material';
import { Button } from 'react-scroll';

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
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type='text' onClick={openUserModal}>내 정보</button>
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type="text" onClick={openInfoModal}>결혼 정보</button>
                                </Grid2>
                            </div>
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