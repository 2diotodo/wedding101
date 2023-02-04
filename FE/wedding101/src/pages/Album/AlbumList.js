import './AlbumList.css';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MediaItem from '../../components/album/MediaItem';
import testMedia from '../../test/testMedia.json';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Pagination } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import usePagination from '../../utils/Pagination';

const AlbumList = (props) => {
    const [ page, setPage ] = useState(1);
    // axios 통신으로 DB 데이터 가져오기 구현필요
    // const [ media, setMedia ] = useState([]);
    
    
    // sorting
    const [order, setOrder] = useState('createdAt');
    const sortedItems = testMedia.sort((a,b) => b[order] - a[order]);
    
    const orderHandler = (e) => {
        setOrder(e.target.value);
        console.log(e.target.value);
    }

    // 검색 Deprecated.
    // const [ input, setInput ]= useState('');
    // const getValue = (e) => {
    //     setInput(e.target.value.toLowerCase())
    // }

    // const searched = testMedia.filter((item) =>

    //     item.name.toLowerCase().includes(input));

    // 휴지통 이동
    const navigate = useNavigate();
        const onMoveToDeletedHandler = () =>{
            navigate('/album/deleted');
        }

    // pagination
    const PER_PAGE = 6;

    const count = Math.ceil(sortedItems.length / PER_PAGE);
    const mediaData = usePagination(sortedItems, PER_PAGE);

    const pageHandler = (e,p) => {
        setPage(p);
        mediaData.jump(p);
    };

    return(
        <div className='album-list'>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={3} >
                    <h1>Album List</h1>
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="sort-label">정렬조건</InputLabel>
                        <Select
                            labelId="sort-label"
                            id="sort-select"
                            value={order}
                            label="Sort"
                            onChange={orderHandler}
                        >
                        <MenuItem value={'name'}>이름</MenuItem>
                        <MenuItem value={'createdAt'}>날짜</MenuItem>
                    </Select>
                    </FormControl>
                    <br />
                    <Button >정렬</Button>
                    <br />
                    
                    <div className='bin-icon'>
                    <DeleteIcon onClick={onMoveToDeletedHandler}/>
                    </div>
                </Grid2>
                <Grid2 lg={9} sm={9} spacing={2}>
                    <div className='media-items'>
                        {mediaData.currentData().map(media => (
                        <MediaItem media={media} key={media.mediaSeq} />
                        ))}
                    </div>
                    <div className='pagination'>
                        <Pagination count={count} page={page} onChange={pageHandler}/>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AlbumList;