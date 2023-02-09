import './BoardReview.css';

import { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import TableItem from '../../components/board/TableItem';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import testTable from '../../test/testReviews.json';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Pagination } from '@mui/material';
import usePagination from '../../utils/Pagination';


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
                    <Navbar />
                </Grid2>
                <Grid2 lg={9} sm={9}>
                    <div className='review-items'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dummy No</TableCell>
                        <TableCell align="right">Dummy Title</TableCell>
                        <TableCell align="right">Dummy rate</TableCell>
                        <TableCell align="right">Dummy Date</TableCell>
                    </TableRow>
                    </TableHead>
                            <TableBody>
                    {reviewData.currentData().map(reviewItem => (
                        <TableItem reviewItem={reviewItem} key={reviewItem.revSeq}/>
                        ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
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