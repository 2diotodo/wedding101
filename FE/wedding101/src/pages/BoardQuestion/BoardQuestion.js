import './BoardQuestion.css';
import './BoardQuestionModal.css';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import sampleTable from '../../test/testContact.json';
import { TableContainer, Table, TableHead, TableBody, TableRow, 
         TableCell, Pagination, Box, Modal, Typography, Button} from '@mui/material';
import usePagination from '../../utils/Pagination';
import { func } from 'prop-types';

function ModalSubTitle_(props){
    return (
        <div className="Modal_SubTitle">
            <div className="Modal_SubTitle_writer">작성자: {props.writer}</div>
            <div className="Modal_SubTitle_date">작성일: {props.date}</div>
        </div>
    );
}

function AskModal_(props){
    return (
        <Modal  open={props.isOpen} 
                onClose={props.doClose} 
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">{props.title}</Typography>
                
                {/* Modal 창 유저 글 작성 */}
                <Typography  component="div" id="Modal__body">
                    <ModalSubTitle_ writer={props.writer} date={props.askDate}></ModalSubTitle_>
                    <div className='Division_Line'></div>
                    {props.content}
                </Typography>

                {/* Modal 창 관리자 글 작성 */}
                <Typography  component="div" id="Modal__body">
                    <ModalSubTitle_ writer="관리자" date={props.ansDate}></ModalSubTitle_>
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

    const {questionSeq, userSeq, questionTitle, questionContent, userId, createdAt, updatedAt, isValid} = arg;
    const createdDate = createdAt.split(" ")[0];
    const updatedDate = updatedAt.split(" ")[0];
    
    return(
      <>
        <TableRow   key={questionSeq}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{questionSeq}</TableCell>
            <TableCell align="center" onClick={handleOpen}>{questionTitle}</TableCell>
            <TableCell align="center" >{userId}</TableCell>
            <TableCell align="right" >{createdDate}</TableCell>
        </TableRow>

        <AskModal_  isOpen={open} 
                    doClose={handleClose} 
                    title={questionTitle} 
                    content={questionContent}
                    writer={userId}
                    askDate={createdDate}
                    ansDate={updatedDate} ////<- ans date 정보가 필요
                    className="BQ-style"/>
      </>
    );
}

function Navbar_(props) {
    return(
        <div className="BQ-navbar">
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
                {props.data.currentData().map( 
                    item => (<AskTableItem_ arg={item} key={item.askSeq}/>)
                )}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

function getCurrentDate(){
    const today = new Date();   
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;
    return dateString;
}

function AskWriteModal_(props){
    const userId = sessionStorage.getItem('userId');
    const currDate = getCurrentDate();
    console.log(userId);
    console.log(currDate);
    return (
        <Modal  open={props.isOpen} 
                onClose={props.doClose} 
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">문의 작성하기</Typography>
                
                {/* Modal 창 유저 글 작성 */}
                <Typography  component="div" id="Modal__body">
                    {/* props로 받아온 유저 닉네임 넣기 */}
                    <ModalSubTitle_ writer={userId} date={currDate}></ModalSubTitle_> 
                    <div className='Division_Line'></div>
                    {/* onChange 콜백용 함수 만들어서 content에 set, modal에 버튼 추가하고 컨텐츠 등록 */}
                    {/* <TextField className='newQuestionContent' onChange=/> */}
                </Typography>
            </Box>
        </Modal>
    );
}

function AskButton_(){
    // ask modal
    const [askModalOpen, setAskModalOpen] = useState(false);
    const openAskModal = () => { setAskModalOpen(true); };
    const closeAskModal = () => { setAskModalOpen(false); };

    // ask Modal
    function loginCheckHandler(){
        const isLogin = sessionStorage.getItem('isLogin')
        if (isLogin == 'false'){
            alert("로그인을 먼저 해주세요");
        }
        else{
            // Modal 창 띄우기
            openAskModal(); // 창 열림 설정
        }
    }
    return(
        <>
            <Button className="BQ-register_btn"
                    color="primary" 
                    variant="contained" 
                    startIcon="✏️"
                    size="small"
                    onClick={loginCheckHandler}>문의 등록</Button>

            <AskWriteModal_ 
                isOpen={askModalOpen} 
                doClose={closeAskModal} 
                className="BQ-style"/>
        </>
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
        <div className='BQ-board-ask'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} sm={3}>
                    <Navbar_ pageTitle="Contact ✍🏻"/>
                </Grid2>
                <Grid2 lg={9} sm={10} id="BQ-grid-align">
                    <div className='review-items'>
                        <AskTable_ data={askData}/>
                    </div>
                    <div className='BQ-button-style'>
                        <AskButton_ />
                    </div>
                    <div className='BQ-pagination'>
                        <Pagination count={count} page={page} onChange={pageHandler}/>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}
export default BoardQuestion;
// export default Board;