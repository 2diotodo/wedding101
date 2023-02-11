import './BoardQuestion.css';
import './BoardQuestionModal.css';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import sampleTable from '../../test/testContact.json';
import { TableContainer, Table, TableHead, TableBody, TableRow, 
         TableCell, Pagination, Box, Modal, Typography} from '@mui/material';
import usePagination from '../../utils/Pagination';

function AskModal_(props){

    function ModalSubTitle1_(props){
        return (
            <div className="Modal_SubTitle">
                <div className="Modal_SubTitle_writer">작성자: {props.writer}</div>
                <div className="Modal_SubTitle_date">작성일: {props.date}</div>
            </div>
        );
    }

    function ModalSubTitle2_(props){
        return (
            <div className="Modal_SubTitle">
                <div className="Modal_SubTitle_writer">작성자: {props.writer}</div>
                <div className="Modal_SubTitle_date">작성일: {props.date}</div>
            </div>
        );
    }

    return (
        <Modal  open={props.isOpen} 
                onClose={props.doClose}
                className="Modal">
            <Box className="Modal__content">
                <Typography id="Modal__header">{props.title}</Typography>
                    <Typography id="Modal__body">
                        <ModalSubTitle1_ writer={props.writer} date={props.askDate}/>
                        <div className='Division_Line'></div>
                        {props.content}
                    </Typography>

                    <Typography id="Modal__body">
                        <ModalSubTitle2_ writer="관리자" date={props.ansDate}/>
                        <div className='Division_Line'></div>
                        잘지냈지 넌 잘 지냈어?
                    </Typography>
            </Box>
        </Modal>
    );
}

function AskTableItem_({arg}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {askSeq, albumSeq, askTitle,  askContent, writer, createdAt, updatedAt, isValid} = arg;
    const createdDate = createdAt.split(" ")[0];
    const updatedDate = updatedAt.split(" ")[0];
    const modalData = [open, handleClose, askTitle, askContent];
    
    return(
      <>
        <TableRow   key={askSeq}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{askSeq}</TableCell>
          <TableCell align="center" onClick={handleOpen}>{askTitle}</TableCell>
          <TableCell align="center" >{writer}</TableCell>
          <TableCell align="right" >{createdDate}</TableCell>
        </TableRow>
        <AskModal_  isOpen={open} 
                    doClose={handleClose} 
                    title={askTitle} 
                    content={askContent}
                    writer={writer}
                    askDate={createdDate}
                    ansDate={updatedDate} ////<- ans date 정보가 필요
                    className="style"/>
      </>
    );
}

function Navbar_(props) {
    return(
        <div className="navbar">
            <h1>{props.pageTitle}</h1>
        </div>
    );
}

function TableHead_(){
    return (
        <TableHead>
            <TableRow>
                <TableCell>문의 번호</TableCell>
                <TableCell align="center">문의 사항</TableCell>
                <TableCell align="center">작성자</TableCell>
                <TableCell align="right">문의 날짜</TableCell>
            </TableRow>
        </TableHead>
    );
}

function AskTable_(props){
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
            {/* <TableHead_ /> */}
            <TableBody>
                {props.data.currentData().map( item => (
                    <AskTableItem_ arg={item} key={item.askSeq}/>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}


function BoardQuestion() {
    const [ page, setPage ] = useState(1);
    const [ askItem, setAskItem ] = useState(sampleTable);
    // axios 통신으로 askItem 가져오기

    // pagination
    const PER_PAGE = 8;
    
    const count = Math.ceil(askItem.length / PER_PAGE);
    const askData = usePagination(askItem, PER_PAGE);

    const pageHandler = (e,p) => {
        setPage(p);
        askData.jump(p);
    };

    return (
        <div className='board-ask'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} sm={3}>
                    <Navbar_ pageTitle="Contact Us"/>
                </Grid2>
                <Grid2 lg={9} sm={9}>
                    <div className='review-items'>
                        <AskTable_ data={askData}/>
                    </div>
                    <div className='pagination'>
                        <Pagination count={count} page={page} onChange={pageHandler}/>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}
export default BoardQuestion;
// export default Board;