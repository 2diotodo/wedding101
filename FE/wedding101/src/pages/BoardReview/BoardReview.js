import './BoardReview.css';

import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import TableItem from '../../components/board/TableItem';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import testTable from '../../test/testReviews.json';
import { TableContainer, Table, TableHead, TableBody, TableRow, 
         TableCell, Pagination, Box, Modal, Typography, Button} from '@mui/material';
import usePagination from '../../utils/Pagination';
import { func } from 'prop-types';
import { TextField } from '@mui/material';

function ModalSubTitle(props){
    return (
        <div className="Modal_SubTitle">
            <div className="Modal_SubTitle_writer">작성자: {props.writer}</div>
            <div className="Modal_SubTitle_date">작성일: {props.date}</div>
        </div>
    );
}

function ReviewModal(props){
    return (
        
        <Modal  open={props.isOpen} 
                onClose={props.doClose} 
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">{props.title}</Typography>
                
                {/* Modal 창 유저 글 작성 */}
                <Typography  component="div" id="Modal__body">
                    <ModalSubTitle writer={props.writer} date={props.reviewDate}></ModalSubTitle>
                    <div className='Division_Line'></div>
                    {props.content}
                </Typography>
            </Box>
        </Modal>
    );
}

function ReviewTableItem({arg}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {reviewSeq, albumSeq, reviewTitle,  reviewContent, writer, createdAt, updatedAt, isValid} = arg;
    const createdDate = createdAt.split(" ")[0];
    const updatedDate = updatedAt.split(" ")[0];
    const modalData = [open, handleClose, reviewTitle, reviewContent];
    
    return(
      <>
        <TableRow   key={reviewSeq}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">{reviewSeq}</TableCell>
        <TableCell align="center" onClick={handleOpen}>{reviewTitle}</TableCell>
        <TableCell align="center" >{writer}</TableCell>
        <TableCell align="right" >{createdDate}</TableCell>
        </TableRow>
        <ReviewModal
            isOpen={open} 
            doClose={handleClose} 
            title={reviewTitle} 
            content={reviewContent}
            writer={writer}
            reviewDate={createdDate}
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

function ReviewTable(props){
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
            {/* <TableHead_ /> */}
            <TableBody>
                {props.data.currentData().map( 
                    item => (<ReviewTableItem arg={item} key={item.reviewSeq}/>)
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

function ReviewWriteModal(props){
    const userId = sessionStorage.getItem('userId');
    const currDate = getCurrentDate();
    console.log(props);
    console.log(userId);
    console.log(currDate);

    const reviewCancel = () => {

    }

    const reviewSubmit = () => {
        const reviewTitle = document.getElementById('newReviewTitle').value;
        const reviewContent = document.getElementById('newReviewContent').value;
        console.log(reviewTitle)
        console.log(reviewContent)
        if (!reviewTitle || !reviewContent){
            alert('제목이나 내용이 비어있습니다.');
            return;
        }
    }

    return (
        
        <Modal  open={props.isOpen} 
                onClose={props.doClose} 
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">리뷰 작성하기</Typography>
                
                {/* Modal 창 유저 글 작성 */}
                <Typography  component="div" id="Modal__body" sx={{'& .MuiTextField-root': {  width: '100%' },}}>
                    {/* props로 받아온 유저 닉네임 넣기 */}
                    <div className="Modal_SubTitle">
                        <div></div>
                        <div className="Modal_SubTitle_date">작성일: {currDate}</div>
                    </div>
                    <div className='newReviewWrapper'>
                        <TextField id='newReviewTitle' placeholder='제목:' variant='standard'/>
                        <TextField
                            id='newReviewContent'
                            label="내용"
                            variant='standard'
                            multiline
                            rows={14}/>
                    </div>
                </Typography>
                <div className='horizontalLayout' id='newReviewHL'>
                    <Button className='register_btn' color="primary" 
                        variant="contained"
                        startIcon="🤔"
                        size="small"
                        onClick={reviewCancel}>취소</Button>
                    <Button className='register_btn' color="primary" 
                        variant="contained"
                        startIcon=""
                        size="small"
                        onClick={reviewSubmit}>리뷰 올리기</Button>
                </div>
                
            </Box>
            
        </Modal>
    );
}

function WriteReviewButton(props){

    // review modal
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const openReviewModal = () => { setReviewModalOpen(true); };
    const closeReviewModal = () => { setReviewModalOpen(false); };

    // review Modal
    function loginCheckHandler(){
        const isLogin = sessionStorage.getItem('isLogin')
        if (isLogin === 'false'){
            alert("로그인을 먼저 해주세요");
        }
        else{
            // Modal 창 띄우기
            openReviewModal(); // 창 열림 설정
        }
    }

    return(
        <>
            <Button className="register_btn"
                color="primary" 
                variant="contained" 
                startIcon="✏️"
                size="small"
                onClick={loginCheckHandler}>문의 등록</Button>
            <ReviewWriteModal
                isOpen={reviewModalOpen} 
                doClose={closeReviewModal} 
                className="style"/>
        </>
    );
}

function BoardReview() {
    const [ page, setPage ] = useState(1);
    const [ reviewItem, setReviewItem ] = useState(testTable);
    // axios 통신으로 reviewItem 가져오기

    // pagination
    const PER_PAGE = 8;
    const count = Math.ceil(reviewItem.length / PER_PAGE);
    const reviewData = usePagination(reviewItem, PER_PAGE);
    const pageHandler = (e,p) => {
        setPage(p);
        reviewData.jump(p);
    };

    return (
        <div className='board-review'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} sm={3}>
                    <Navbar_ pageTitle="Review 👍"/>
                </Grid2>
                <Grid2 lg={9} sm={10}>
                    <div className='review-items'>
                        <ReviewTable data={reviewData}/>
                    </div>
                    <div className='button-style'>
                        <WriteReviewButton/>
                    </div>
                    <div className='pagination'>
                        <Pagination count={count} page={page} onChange={pageHandler}/>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}
export default BoardReview;