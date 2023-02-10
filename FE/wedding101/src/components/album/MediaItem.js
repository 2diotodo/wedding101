import './MediaItem.css';

import { useEffect, useState } from 'react';
import { Box, CardHeader, Modal } from '@mui/material';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { CameraAlt, Videocam, Star, StarBorder } from '@mui/icons-material';

import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

const MediaItem = ({ media }) => {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    mediaSeq,
    albumSeq,
    storageUrl,
    urlToImg,
    onBooth,
    mediaName,
    mediaRelation,
    mediaReceiver,
    video,
    wish,
    inBin,
  } = media;

  //   useEffect(async () => {
  //     const fetchData = async () => {
  //       const res = await axios.get({
  //         url: "http://localhost:8080",
  //         media,
  //       })
  //     if(res.data.type === 'liked') setLike(true);
  //   }
  //   fetchData()
  // }, []);

  const toggleLike = async (e) => {
    const res = await axios.post(); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setLike(!like);
  };

  return (
    <div className='media-item'>
      <Card sx={{ maxWidth: 300 }}>
        {/* 사진/비디오여부표시 및 좋아요표시 */}
        <CardHeader
          avatar={video ? <Videocam /> : <CameraAlt />}
          action={
            <IconButton aria-label='star' onClick={toggleLike}>
              {wish ? <Star fontSize='small' /> : <StarBorder fontSize='small' />}
            </IconButton>
          }
        ></CardHeader>
        {/* Card 본문 */}
        <CardActionArea onClick={handleOpen}>
          <CardMedia component='img' height='140' image={urlToImg} alt='img' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {mediaName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {mediaRelation}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
      {/* card 누르면 모달창오픈 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {media.isVideo === true ? (
            <video src={storageUrl} controls autoPlay loop width='100%' />
          ) : (
            <img src={storageUrl} alt={urlToImg} />
          )}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {mediaRelation}의 메세지
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MediaItem;
