import './AlbumCover.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import useUploadMedia from '../../modules/useUploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router';
import {
  Button,
  IconButton,
  Tooltip,
  Badge,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import MergedItem from '../../components/album/MergedItem';

function AlbumCover() {
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
    isValid: '',
    createdAt: '',
    updatedAt: '',
  });

  const accessToken = sessionStorage.getItem('accessToken');

  const [showUpdate, setShowUpdate] = useState(false);
  const [unifyCheck, setUnifyCheck] = useState(false); // 통합본 신청여부
  const [mergedMedia, setMergedMedia] = useState([
    {
      albumSeq: '',
      createdAt: '',
      requestStatus: '',
      unifiedName: '',
      unifiedSeq: 0,
      unifiedUrl: '',
      updatedAt: '',
    },
  ]);
  const albumCoverUrl = `https://wedding101.shop/api/file/uploadAlbumCover`;
  const { fileMedia, filePreview, fileImageHandler, deleteFileImage, onFileUpload } =
    useUploadMedia(albumCoverUrl, accessToken);

  // 앨범생성일 연산 yyyy-mm-dd
  const dateformat = new Date(albumForm.createdAt);
  const year = dateformat.getFullYear();
  const month = dateformat.getMonth() + 1;
  const date = dateformat.getDate();

  const albumCreated = `${year}-${month >= 10 ? month : '0' + month}-${
    date >= 10 ? date : '0' + date
  }`;
  async function getUserSeq() {
    await axios
      .get(`https://wedding101.shop/api/user`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
      .then((res) => {
        setAlbumForm((albumForm) => {
          return { ...albumForm, userSeq: res.data.data.userSeq };
        });
      });
  }
  useEffect(() => {
    getUserSeq();
    console.log('userSeq: ', albumForm.userSeq);
    getAlbum();
  }, [albumForm.userSeq]);

  // 앨범정보 가져오기
  async function getAlbum() {
    await axios
      .get(`https://wedding101.shop/api/album?userSeq=${albumForm.userSeq}`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
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
  };
  const onAlbumListHandler = () => {
    navigate('/album/list');
  };

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/review');
  };

  // 통합본 가져오기
  const unifiedMedia = async () => {
    await axios
      .get(`https://wedding101.shop/api/unifiedVideo/all/${albumForm.albumSeq}`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
      .then((res) => {
        console.log('setMedia 성공');
        console.log(res.data);
        setMergedMedia([...mergedMedia], res.data);
      })
      .catch((err) => {
        console.log('실패');
      });
  };
  return (
    <div className='album-cover'>
      <Grid2 container spacing={3}>
        <Grid2 lg={2} sm={2}>
          <h1>Album Cover page</h1>
          <div className='update-button'>
            <Button onClick={showUpdateHandler}>앨범 수정하기</Button>
          </div>
          <div className='unify-button'>
            <Button onClick={unifiedMedia}>통합본 확인하기</Button>
          </div>
          <div className='merged-list'>
            <List component='nav' aria-label='merged-list'>
              {mergedMedia && mergedMedia.length > 0
                ? mergedMedia.map((item) => <MergedItem mergedMedia={item} key={item.index} />)
                : null}
            </List>
          </div>
        </Grid2>
        <Grid2 lg={6} sm={6}>
          <Tooltip title='앨범 펼치기'>
            <div
              className='cover-image'
              style={{ color: albumForm.albumColor }}
              onClick={onAlbumListHandler}
            >
              <div className='album-img'>
                <div className='media-area'>
                  {albumForm.albumPhotoUrl && albumForm.albumPhotoUrl !== null ? (
                    <img src={albumForm.albumPhotoUrl} alt='preview' />
                  ) : (
                    <div className='media-area'>
                      {filePreview && <img src={filePreview} alt='preview' />}
                    </div>
                  )}
                </div>
              </div>

              <div className='cover-id'>
                <Badge badgeContent={albumForm.albumMediaCnt} color='secondary'>
                  {albumForm.albumName} &nbsp;
                </Badge>
              </div>
            </div>
          </Tooltip>
          {showUpdate ? (
            <div className='upload-media'>
              <IconButton aria-label='upload picture' component='label'>
                <input hidden type='file' accept='image/*, video/*' onChange={fileImageHandler} />
                <UploadIcon fontSize='large' />
              </IconButton>
              <Button color='success' onClick={deleteFileImage}>
                지우기
              </Button>
              <Button color='success' onClick={onFileUpload}>
                적용
              </Button>
            </div>
          ) : null}
        </Grid2>
        <Grid2 lg={4} sm={4}>
          <Grid2 lg={4}>
            <h3>나의 결혼식 날짜</h3>
            <p>{Date()}</p>
            <h3>앨범 생성일</h3>
            <p>{albumCreated}</p>
          </Grid2>
          <Grid2 lg={4}>
            <Tooltip title='리뷰로 이동'>
              <h3 onClick={onClickHandler}>서비스 리뷰하기</h3>
            </Tooltip>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default AlbumCover;
