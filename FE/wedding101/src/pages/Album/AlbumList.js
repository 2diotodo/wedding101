import './AlbumList.css';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MediaItem from '../../components/album/MediaItem';
// import testMedia from '../../test/testMedia.json';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import usePagination from '../../utils/Pagination';
import axios from 'axios';

const AlbumList = (props) => {
  const [page, setPage] = useState(1);
  // axios 통신으로 DB 데이터 가져오기 구현
  const [media, setMedia] = useState([]);
  console.log(1);
  useEffect(() => {
    console.log(2);
    // getAllMedia();
    const fetch = async () => {
      const res = await axios.get(`http://i8a101.p.ssafy.io:8085/media/1`);
      setMedia(res.data);
    };
    fetch();
    console.log(3);
    console.log(media);
  }, []);

  console.log(4);
  async function getAllMedia() {
    console.log(5);
    await axios
      .get(`http://i8a101.p.ssafy.io:8085/media/1`)
      .then((res) => {
        console.log(6);
        setMedia(res.data);
        console.log('setMedia 성공');
        console.log('media-in', media);
      })
      .catch((err) => {
        console.log('실패');
      });
  }
  console.log(7);

  // sorting
  const [order, setOrder] = useState('createdAt');

  const orderHandler = (e) => {
    const orderBy = e.target.value;
    setOrder(orderBy);
    console.log('orderBy: ', orderBy);
    const optoins = {
      name: [...media].sort((a, b) => (a.name < b.name ? -1 : 1)),
      createdAt: [...media].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
      createdAtRev: [...media].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    };
    setMedia(optoins[orderBy]);
  };

  // 검색 Deprecated.
  // const [ input, setInput ]= useState('');
  // const getValue = (e) => {
  //     setInput(e.target.value.toLowerCase())
  // }

  // const searched = testMedia.filter((item) =>

  //     item.name.toLowerCase().includes(input));

  // Album Deleted로 이동
  const navigate = useNavigate();
  const onMoveToDeletedHandler = () => {
    navigate('/album/deleted');
  };

  // pagination
  const PER_PAGE = 6;
  console.log('length', media.length);
  const count = Math.ceil(media.length / PER_PAGE);
  const mediaData = usePagination(media, PER_PAGE);

  const pageHandler = (e, p) => {
    setPage(p);
    mediaData.jump(p);
  };

  return (
    <div className='album-list'>
      <Grid2 container spacing={3}>
        <Grid2 lg={3} sm={3}>
          <h1>Album List</h1>
          <br />
          <FormControl fullWidth>
            <InputLabel id='sort-label'>정렬조건</InputLabel>
            <Select
              labelId='sort-label'
              id='sort-select'
              value={order}
              label='Sort'
              onChange={orderHandler}
            >
              <MenuItem value={'createdAt'}>날짜</MenuItem>
              <MenuItem value={'createdAtRev'}>날짜역순</MenuItem>
              <MenuItem value={'name'}>이름</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button>정렬</Button>
          <br />

          <div className='bin-icon'>
            <DeleteIcon onClick={onMoveToDeletedHandler} />
          </div>
        </Grid2>
        <Grid2 lg={9} sm={9} spacing={2}>
          <div className='media-items'>
            {media && (
              <div>
                {media === undefined ? (
                  mediaData
                    .currentData()
                    .map((media) => <MediaItem media={media} key={media.mediaSeq} />)
                ) : (
                  <div>no media</div>
                )}
              </div>
            )}
          </div>
          <div className='pagination'>
            <Pagination count={count} page={page} onChange={pageHandler} />
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default AlbumList;
