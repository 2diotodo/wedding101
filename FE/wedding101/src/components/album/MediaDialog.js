import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useEffect } from 'react';

function MediaDialog({media, deleteConfirm, getAllMedia, getDeletedMedia}) {
const [isBin, setIsBin] = useState(media.inBin);

  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    console.log('mediaSeq',media.mediaSeq);
    console.log('isBin',isBin);
    media.inBin=isBin;
  },[isBin]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const binClickHandler = async () => {
      console.log('delete',isBin);
    setIsBin(isBin => !isBin);
    console.log(media.mediaSeq);
    await axios.put(`http://wedding101.shop/api/media/delete/${media.mediaSeq}`,{
       mediaSeq: media.mediaSeq,
    });
    getAllMedia();
    setOpen(false);
  }

  const restoreHandler = async () => {
    console.log('restore',isBin);
    setIsBin(isBin => !isBin);
    console.log(media.mediaSeq);
    await axios.put(`http://wedding101.shop/api/media/restore/${media.mediaSeq}`,{
       mediaSeq: media.mediaSeq,
    });
    getDeletedMedia();
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        삭제/복구
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {deleteConfirm}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          {isBin===false ? (<Button onClick={binClickHandler} autoFocus>
            삭제
          </Button>
          ) :(
          <Button onClick={restoreHandler} autoFocus>
            복원
          </Button>)}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MediaDialog;