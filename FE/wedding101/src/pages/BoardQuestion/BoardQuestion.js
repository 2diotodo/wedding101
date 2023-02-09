import './BoardQuestion.css';

import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import sampleTable from '../../test/testContact.json';
import { TableContainer, Table, TableHead, TableBody, TableRow, 
         TableCell, Pagination, Box, Modal, Typography} from '@mui/material';
import usePagination from '../../utils/Pagination';

function AskTableItem({arg}){
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {askSeq, albumSeq, askTitle,  askContent, wrtier, createdAt, updatedAt, isValid} = arg;
    const createdDate = createdAt.split(" ")[0];

    return(
      <>
        <TableRow   key={askSeq}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">{askSeq}</TableCell>
          <TableCell align="center" onClick={handleOpen}>{askTitle}</TableCell>
          <TableCell align="center" >{wrtier}</TableCell>
          <TableCell align="right" >{createdDate}</TableCell>
        </TableRow>

        {/* askTitle 누르면 모달창오픈 */}
        <Modal  open={open} 
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
        <Box className="style">
            <Typography id="modal-modal-title" 
                        variant="h6" 
                        component="h2">{askTitle}</Typography>
            <Typography id="modal-modal-description" 
                        sx={{ mt: 2 }}>{askContent}</Typography>
        </Box>
        </Modal>
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
    <TableHead>
        <TableRow>
            <TableCell>문의 번호</TableCell>
            <TableCell align="right">문의 사항</TableCell>
            <TableCell align="right">작성자</TableCell>
            <TableCell align="right">문의 날짜</TableCell>
        </TableRow>
    </TableHead>
}

function AskTable_(props){
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead_ />
            <TableBody>
                {props.data.currentData().map( item => (
                    <AskTableItem arg={item} key={item.revSeq}/>
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