import './BoardReview.css';


import PaginationButtons from '../../components/board/PaginationButtons';
import Navbar from '../../components/common/Navbar';
import TableBox from '../../components/board/TableBox';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';



function BoardReview() {

    return (
        <div className='board-review'>
            <Grid2 container spacing={2}>
                <Grid2 xs={4}>
                    <Navbar />
                </Grid2>
                <Grid2 xs={8}>
                    <TableBox />
                    <PaginationButtons className="pagination"/>
                </Grid2>
            </Grid2>
        </div>
    );
}
export default BoardReview;