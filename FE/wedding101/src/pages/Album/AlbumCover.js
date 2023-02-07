import './AlbumCover.css';

import { useState } from 'react';
import UploadMedia from '../../components/common/UploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router';


function AlbumCover(){
    const [albumForm, setAlbumForm] = useState({
        albumSeq: '',
        infoSeq: '',
        userSeq: '',
        albumName: '',
        albumColor: '',
        albumPhotoUrl: '',
        albumAccessId: '',
        albumThanksUrl: '',
        albumMediaCnt: '',
        createdAt: '',
        updatedAt: '',
        isValid: '',

    });
    const userId = sessionStorage.getItem('userId');
    const onAlbumListHandler = () => {
        navigate('/album/list');
    };

    const navigate = useNavigate();
    const onClickHandler = () => {
      navigate('/review');
    };

    return(
        <div className='album-cover'>
            <Grid2 container spacing={3}>
                 <Grid2 lg={2} sm={2}>
                    <h1>Album Cover page</h1>
                </Grid2>
                <Grid2 lg={6} sm={8}>
                    <div className='cover-image' style={{color: albumForm.albumColor}} >
                        <div className='album-img'>
                            <img src={albumForm.albumPhotoUrl} alt='img upload' />
                        </div>
                        <div className='cover-id' onClick={onAlbumListHandler}>
                            {userId}님의 앨범
                        </div>
                    </div>
                    <div className='upload-media'>
                        <UploadMedia media={albumForm.albumPhotoUrl}/>
                    </div>
                </Grid2>
                <Grid2 lg={4} sm={2}>
                    <Grid2 lg={4}>
                        <h3>나의 결혼식 날짜</h3>
                        <p>{Date()}</p>
                        <h3>앨범 생성일</h3>
                        <p>{albumForm.createdAt}</p>
                    </Grid2>
                    <Grid2 lg={4}>
                        <h3 onClick={onClickHandler}>서비스 리뷰하기</h3>
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default AlbumCover;