import './AlbumCover.css';

import UploadMedia from '../../components/common/UploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router';


function AlbumCover(){

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
                    <div className='cover-image' onClick={onAlbumListHandler}>
                        {}님의 앨범
                    </div>
                    <div className='upload-media'>
                        <UploadMedia />
                    </div>
                </Grid2>
                <Grid2 lg={4} sm={2}>
                    <Grid2 lg={4}>
                        <h3>나의 결혼식 날짜</h3>
                        <p>{Date()}</p>
                        <h3>앨범 생성일</h3>
                        <p>{Date()}</p>
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