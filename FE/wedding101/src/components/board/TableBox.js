import './TableBox.css';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import Paper from '@mui/material/Paper';

function TableBox(){

    function reviewData(title, writer, date){
        return {title, writer, date};
    }
    
    const rows = [
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
        reviewData('this is dummy title', 'john doe', 'date'),
    ];
    return(
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dummy Title</TableCell>
            <TableCell align="right">Dummy writer</TableCell>
            <TableCell align="right">Dummy Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.writer}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableBox;