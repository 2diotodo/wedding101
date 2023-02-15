import './AlbumList.css';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MediaItem from '../../components/album/MediaItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import Star from '@mui/icons-material/Star';
import { Button, Pagination, FormControlLabel, Switch, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import usePagination from '../../utils/Pagination';
import axios from 'axios';

const AlbumList = () => {
  const [userSeq, setUserSeq] = useState('');
  const accessToken = sessionStorage.getItem('accessToken');
  axios.get(`http://wedding101.shop/api/user`, {
    headers: {
      "Authorization" : "Bearer " + accessToken,
    }
  })
  .then((res)=>{
    setUserSeq(res.data.userSeq);
    
  })
  
  
  const [page, setPage] = useState(1);
  const [media, setMedia] = useState([]);
  const [mergeVideo, setMergeVideo] = useState([]);
  const [mergePhoto, setMergePhoto] = useState([]);
  const [likeToggle, setLikeToggle] = useState(false);
  const [unifiedName, setUnifiedName] = useState(''); // 통합본 제목 입력받기
  const [open, setOpen] = useState(false);  // dialog open 관리
  const [backdropOpen, setBackdropOpen] = useState(false);  // backdrop open 관리

  // title dialog open
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAllMedia();
    if(likeToggle===true){
      wishFilterHandler();
    }else{
      getAllMedia();
    }
  }, []);
  
  // axios 통신으로 DB 데이터 가져오기 구현
  async function getAllMedia() {
    await axios
      .get(`http://wedding101.shop/api/media/all/${userSeq}`,{
        headers:{
          "Authorization" : "Bearer " + accessToken
        }
      })
      .then((res) => {
        setMedia(res.data.data);
        console.log('setMedia 성공');
        console.log(media);
      })
      .catch((err) => {
        console.log('실패');
      });
  }
  const merged = [...media].filter((item) => item.wish===true)

  // 북마크 목록불러오기
  const wishFilterHandler = () => {
    setMedia(merged);
  }

  const onLikeToggleHandler = () =>{
    setLikeToggle(!likeToggle);
    if(likeToggle===false){
      wishFilterHandler();
    }else{
      getAllMedia();
    }
  }

  // sorting
  const [order, setOrder] = useState('createdAt');

  const orderHandler = (e) => {
    const orderBy = e.target.value;
    setOrder(orderBy);
    console.log('orderBy: ', orderBy);

    const options = {
      mediaName: [...media].sort((a, b) =>
        a.mediaName < b.mediaName ? -1 : a.mediaName > b.mediaName ? 1 : 0
      ),
      createdAt: [...media].sort((a, b) =>
        b.mediaSeq < a.mediaSeq ? -1 : b.mediaSeq > a.mediaSeq ? 1 : 0
      ),
      createdAtRev: [...media].sort((a, b) =>
        a.mediaSeq < b.mediaSeq ? -1 : a.mediaSeq > b.mediaSeq ? 1 : 0
      ),
    };
    setMedia(options[orderBy]);
  };

  // Album Deleted로 이동
  const navigate = useNavigate();
  const onMoveToDeletedHandler = () => {
    navigate('/album/deleted');
  };


  // pagination
  const PER_PAGE = 6;
  const count = Math.ceil(media.length / PER_PAGE);
  const mediaData = usePagination(media, PER_PAGE);

  const pageHandler = (e, p) => {
    setPage(p);
    mediaData.jump(p);
  };


  // 통합본 merge&split
  const mergeSplit = () =>{
    setMergeVideo([]);
    setMergePhoto([]);
    console.log(merged);
    for(const value of Object.values(merged)){
      console.log(value.storageUrl);
      console.log(value.video);
      value.video === true ? (setMergeVideo((mergeVideo) => [...mergeVideo, value.storageUrl])) : (setMergePhoto((mergePhoto) => [...mergePhoto, value.storageUrl]));
    }
  }

  const unifiedNameHandler = (e) =>{
    setUnifiedName(e.target.value);
  }
  // 통합본 제목 받을 dialog창
  const setTextAlert= () => {
    return(
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>통합본을 신청하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
          신청할 통합본 제목을 입력하세요. &nbsp;북마크 앨범이 하나의 미디어로 제공됩니다.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="통합본 제목"
            type="text"
            fullWidth
            variant="standard"
            onChange={unifiedNameHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={sendRequestHandler}>신청하기</Button>
        </DialogActions>
      </Dialog>
    )
  }
  // 통합본신청
  const sendRequestHandler = async () => {
    setBackdropOpen(true);
    mergeSplit();
    console.log('video',mergeVideo);
    console.log('photo',mergePhoto);
    await axios.post(`http://wedding101.shop/api/file/mergeVideo`,{
      headers: {
        "Authorization" : "Bearer " + accessToken
      },
      data:{
        videoList: mergeVideo,
        imageList: mergePhoto,
      }
    })
    .then( async (res)=>{
      console.log(res.data)
      await axios.post(`http://wedding101.shop/api/unifiedVideo`,{
        headers:{
          "Authorization" : "Bearer " + accessToken
        },
        data:{
          albumSeq: '',
          unifiedName: unifiedName,
          unifiedUrl: res.data,
        }
      })
    })
    .then((res)=> {
      alert('신청이 완료되었습니다.');
      alert('앨범표지에서 신청본을 확인해보세요');

    })
    .catch((err) => {
      console.log('실패!');
    })
    .finally(
      handleClose(),
      setBackdropOpen(false)
    )
  };

  return (
    <div className='album-list'>
      <Grid2 container spacing={3}>
        <Grid2 lg={3} sm={3}>
          <h1>Album List</h1>
          <br />
          <FormControl fullWidth>
            <InputLabel id='sort-label'>정렬조건</InputLabel>
            <Select
              labelId='sort-label'
              id='sort-select'
              value={order}
              label='Sort'
              onChange={orderHandler}
            >
              <MenuItem value={'createdAt'}>최근순</MenuItem>
              <MenuItem value={'createdAtRev'}>오래된순</MenuItem>
              <MenuItem value={'mediaName'}>이름</MenuItem>
            </Select>
          </FormControl>

          <div className='filter-icons'>
            <div className='reset-icon'>
              <Button onClick={getAllMedia} >All</Button>
              <FormControlLabel control={<Switch onChange={onLikeToggleHandler} />} label="Like?" />
            </div>
            <div className='wish-icon'>
              <Star onClick={wishFilterHandler} />
            </div>
            <div className='bin-icon'>
              <DeleteIcon onClick={onMoveToDeletedHandler} />
            </div>
          </div>
          <div className='send-request'>
            <Button onClick={handleClickOpen}>북마크 미디어 신청하기</Button>
          </div>
        </Grid2>
        <Grid2 lg={9} sm={9} spacing={2}>
          <div className='media-items'>
            {media && (
              <div className='media-items'>
                {media.length > 0 ? (
                  mediaData
                    .currentData()
                    .map((item) => <MediaItem media={item} key={item.mediaSeq} getAllMedia={getAllMedia} accessToken={accessToken}/>)
                ) : (
                  <div>no media</div>
                )}
              </div>
            )}
          </div>
          <div className='pagination'>
            <Pagination count={count} page={page} onChange={pageHandler}  />
          </div>
        </Grid2>
      </Grid2>
      {setTextAlert}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default AlbumList;
