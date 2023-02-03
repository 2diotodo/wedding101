import './AlbumList.css';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MediaItem from '../../components/album/MediaItem';
import testMedia from '../../test/testMedia.json';
import SelectBox from '../../components/common/selectBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Pagination, TextField } from '@mui/material';
import { useState } from 'react';

const AlbumDeleted = () => {
    const [ input, setInput ]= useState('');
    // axios 통신으로 DB 데이터 가져오기 구현필요
    const [ media, setMedia ] = useState([]);


    // 검색
    const getValue = (e) => {
        setInput(e.target.value.toLowerCase())
    }

    const searched = testMedia.filter((item) =>

        item.name.toLowerCase().includes(input));


    return(
        <div className='album-deleted'>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={3} >
                    <h1>Album Deleted</h1>
                    <br />
                    <SelectBox />
                    <br />
                    <SelectBox />
                    <br />
                    <TextField id='searchInput'
                    type='text'
                    label='검색'
                    onChange={getValue}
                    />
                    <div className='bin-icon'>
                    <DeleteForeverIcon />
                    </div>
                </Grid2>
                <Grid2 lg={9} sm={9} spacing={2}>
                    <div className='media-items'>
                        {searched.map(media => (
                        <MediaItem media={media} key={media.mediaSeq} />
                        ))}
                    </div>
                    <Pagination />
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AlbumDeleted;