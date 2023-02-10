import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ModifyForm from '../../../components/user/UserModify/ModifyForm'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './UserMyPage.css';
import { Modal } from '@mui/material';

function UserMyPage() {
    const [ModifyOpen, setModifyOpen] = useState(false);
    const handleModifyOpen = () => setModifyOpen(true);
    const handleModifyClose = () => setModifyOpen(false);

    const navigate = useNavigate();
    const toModifyUserPage = ()=> {
        navigate('/user/modify')
    }
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
                                    <button type='text' onClick={handleModifyOpen}>내 정보</button>
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type="text" onClick={toModifyInfoPage}>결혼 정보</button>
                                </Grid2>
                            </div>
                        </Grid2>
                    </div>
                </Grid2>
                
            </Grid2>

            {/* <Modal
                open={ModifyOpen}
                onClose={handleModifyClose}
                >
                

            </Modal> */}
        </div>
    );
}
export default UserMyPage;