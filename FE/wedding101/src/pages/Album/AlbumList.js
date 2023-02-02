import './AlbumList.css';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MediaItem from '../../components/album/MediaItem';
import testMedia from '../../test/testMedia.json';

const AlbumList = () => {
    
    return(
        <div className='album-cover'>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={3} >
                    <h1>Album List</h1>
                </Grid2>
                <Grid2 lg={3} sm={3} spacing={2}>
                    {testMedia.map(media => (
                        <MediaItem media={media} key={media.mediaSeq} />
                    ))}
                </Grid2>
                <Grid2 lg={3} sm={3} spacing={2}>
                {testMedia.map(media => (
                        <MediaItem media={media} key={media.mediaSeq} />
                    ))}
                </Grid2>
                <Grid2 lg={3} sm={3} spacing={2}>
                    {testMedia.map(media => (
                        <MediaItem media={media} key={media.mediaSeq} />
                    ))}
                </Grid2>
            </Grid2>
        </div>
    );
};

export default AlbumList;