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
import MediaDialog from './MediaDialog';

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

const MediaItem = ({ media, getAllMedia, getDeletedMedia }) => {
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
  const [like, setLike] = useState(wish);
  const [open, setOpen] = useState(false);
  const [isBin, setIsBin] = useState(inBin);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteConfirm = (inBin===false) ? '삭제하시겠습니까?' : '복원하시겠습니까?';
  


    useEffect( () => {
      media.wish=like;
      media.inBin=isBin;
  }, [like, isBin]);

  const toggleLike = async () => {
    await axios.get(`http://wedding101.shop/api/media/wish/${mediaSeq}`,{
      
    }); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setLike(like => !like);
    getAllMedia();
  };
  
  return (
    <div className='media-item'>
      <Card sx={{ maxWidth: 300 }}>
        {/* 사진/비디오여부표시 및 좋아요표시 */}
        <CardHeader
          avatar={video ? <Videocam /> : <CameraAlt />}
          action={
            <IconButton aria-label='star' onClick={toggleLike}>
              {like ? <Star fontSize='small' /> : <StarBorder fontSize='small' />}
            </IconButton>
          }
        ></CardHeader>
        {/* Card 본문 */}
        <CardActionArea onClick={handleOpen} >
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
          {media.video === true ? (
            <video src={storageUrl} controls autoPlay loop width='100%' />
          ) : (
            <img src={urlToImg} alt={urlToImg} />
          )}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {mediaRelation}의 메세지
          </Typography>
        </Box>
      </Modal>
      {/* 우클릭시 삭제확인 */}
      <MediaDialog media={media} deleteConfirm={deleteConfirm} getAllMedia={getAllMedia} getDeletedMedia={getDeletedMedia}/>
    </div>
  );
};

export default MediaItem;
