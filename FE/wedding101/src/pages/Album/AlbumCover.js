import './AlbumCover.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import useUploadMedia from '../../modules/useUploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router';
import { Button, IconButton, Tooltip, Badge } from '@mui/material';
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
  const { fileMedia, filePreview, uploadUrl, fileImageHandler, deleteFileImage, onFileUpload } =
    useUploadMedia(albumForm.albumName);

    const dateformat = new Date(albumForm.createdAt);
    const year = dateformat.getFullYear();
    const month = dateformat.getMonth() + 1;
    const date = dateformat.getDate();

    const albumCreated = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`


  const userSequence = sessionStorage.getItem('userSeq');
  useEffect(() => {
    // sessionStorage.setItem('albumPhoto',fileMedia );
    getAlbum();
  }, []);

  async function getAlbum() {
    await axios
      .get(`http://wedding101.shop/api/album?userSeq=${albumForm.userSeq}`)
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
  const name = sessionStorage.getItem('name');
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
        <Grid2 lg={6} sm={6}>
          <div className='cover-image' style={{ color: albumForm.albumColor }}>
            <div className='album-img'>
              <div className='media-area'>{albumForm.albumPhotoUrl && (albumForm.albumPhotoUrl !== null) ?
                ( <img src={albumForm.albumPhotoUrl} alt='preview' />) :
                (<div className='media-area'>{filePreview && <img src={filePreview} alt='preview' />}</div>)
                }
              </div>
            </div>
            <Tooltip title="앨범 펼치기">

            <div className='cover-id' onClick={onAlbumListHandler}>
          <Badge badgeContent={albumForm.albumMediaCnt} color="secondary">
              {name}님의 앨범 &nbsp;
          </Badge>
            </div>
            </Tooltip>

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
        <Grid2 lg={4} sm={4}>
          <Grid2 lg={4}>
            <h3>나의 결혼식 날짜</h3>
            <p>{Date()}</p>
            <h3>앨범 생성일</h3>
            <p>{albumCreated}</p>
          </Grid2>
          <Grid2 lg={4}>
            <Tooltip title="리뷰로 이동">
            <h3 onClick={onClickHandler}>서비스 리뷰하기</h3>
            </Tooltip>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default AlbumCover;
