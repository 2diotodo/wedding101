import './AlbumCover.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import useUploadMedia from '../../modules/useUploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router';
import { Button, IconButton } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

function AlbumCover() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [albumForm, setAlbumForm] = useState({
    albumSeq: '',
    infoSeq: '',
    userSeq: '1',
    albumName: '',
    albumColor: '',
    albumPhotoUrl: '',
    albumAccessId: '',
    albumThanksUrl: '',
    albumMediaCnt: '',
    isValid: '',
    createdAt: '',
    updatedAt: '',
  });
  const { fileMedia, filePreview, fileImageHandler, deleteFileImage, onFileUpload } =
    useUploadMedia(albumForm.albumName);

  useEffect(() => {
    // sessionStorage.setItem('albumPhoto',fileMedia );
    getAlbum();
  }, []);

  async function getAlbum() {
    await axios
      .get(`http://i8a101.p.ssafy.io:8085/album?userSeq=${albumForm.userSeq}`)
      .then((res) => {
        setAlbumForm(res.data.data);
        console.log(res.data.data);
        console.log('setMedia 성공');
      })
      .catch((err) => {
        console.log('실패');
      });
  }

  const showUpdateHandler = () => {
    setShowUpdate(!showUpdate);
  }
  const userId = sessionStorage.getItem('userId');
  const onAlbumListHandler = () => {
    navigate('/album/list');
  };

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/review');
  };

  return (
    <div className='album-cover'>
      <Grid2 container spacing={3}>
        <Grid2 lg={2} sm={2}>
          <h1>Album Cover page</h1>
          <div className='update-button'>
            <Button onClick={showUpdateHandler}>앨범 수정하기</Button>
          </div>
        </Grid2>
        <Grid2 lg={6} sm={8}>
          <div className='cover-image' style={{ color: albumForm.albumColor }}>
            <div className='album-img'>
              <div className='media-area'>{albumForm.albumPhotoUrl && (albumForm.albumPhotoUrl !== null) ?
                ( <img src={albumForm.albumPhotoUrl} alt='preview' />) :
                (<div className='media-area'>{filePreview && <img src={filePreview} alt='preview' />}</div>)
                }
              </div>
            </div>
            <div className='cover-id' onClick={onAlbumListHandler}>
              {albumForm.albumName}님의 앨범
            </div>
          </div>
            {showUpdate ? (
          <div className='upload-media'>
            <IconButton aria-label='upload picture' component='label'>
              <input hidden type='file' accept='image/*, video/*' onChange={fileImageHandler} />
              <UploadIcon fontSize='large' />
            </IconButton>
            <Button color='success' onClick={deleteFileImage}>지우기</Button>
            <Button color='success' onClick={onFileUpload} >적용</Button>
          </div>) :
          null
            }
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
