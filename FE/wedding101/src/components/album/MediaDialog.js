import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

function MediaDialog({media, deleteConfirm}) {
const [isBin, setIsBin] = useState(media.inBin);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const binClickHandler = async () => {
      console.log('delete',isBin);
    setIsBin(!isBin);
    console.log(media.mediaSeq);
    await axios.put(`http://i8a101.p.ssafy.io:8085/media/delete/${media.mediaSeq}`,{
       mediaSeq: media.mediaSeq,
    });
    setOpen(false);
  }

  const restoreHandler = async () => {
    console.log('restore',isBin);
    setIsBin(!isBin);
    console.log(media.mediaSeq);
    await axios.put(`http://i8a101.p.ssafy.io:8085/media/restore/${media.mediaSeq}`,{
       mediaSeq: media.mediaSeq,
    });
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
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