import './AlbumCover.css';

import UploadMedia from '../../components/common/UploadMedia';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function AlbumCover(){
    return(
        <div className='album-cover'>
            <Grid2 container spacing={2}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Album Cover page</h1>
                </Grid2>
                <Grid2 lg={8} sm={10}>
                    <div className='upload-media'>
                    <UploadMedia/>
                    <div>
                        
                    </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default AlbumCover;