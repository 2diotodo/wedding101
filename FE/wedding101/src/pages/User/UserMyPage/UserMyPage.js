import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ModifyForm from '../../../components/user/UserModify/ModifyForm'
import { useNavigate } from 'react-router';
import './UserMyPage.css';

function UserMyPage() {
    const navigate = useNavigate();
    const toModifyUserPage = ()=> {
        navigate('/user/modify')
    }
    const toModifyInfoPage = ()=> {
        navigate('/info/modify')
    }
    const toInvitationPage = ()=> {
        navigate('/invitation')
    }
    const toMyAlbumPage = ()=> {
        navigate('/user/myalbum')
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
                                    <button type="text" onClick={toModifyUserPage}>회원 정보 수정</button>
                                    <ModifyForm />
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                    <button type="text" onClick={toModifyInfoPage}>결혼 정보 수정</button>
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                <button type="text" onClick={toInvitationPage}>모바일 청첩장</button>
                                </Grid2>
                            </div>
                            <div className ='user-mypage-item'>
                                <Grid2 xs={6}>
                                <button type="text" onClick={toMyAlbumPage}>내 앨범</button>
                                </Grid2>
                            </div>
                        </Grid2>
                    </div>
                </Grid2>
                
            </Grid2>
        </div>
    );
}
export default UserMyPage;