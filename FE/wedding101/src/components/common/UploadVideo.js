import './UploadImage.css';

import UploadIcon from '@mui/icons-material/Upload';
import { Button, IconButton } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function UploadVideo() {
    const [filePreview, setFilePreview] = useState('');
    const [fileMedia, setFileMedia] = useState('');
    
    // 파일 미리보기 구현
    const fileImageHandler = (e) => {
        const file = e.target.files[0];
        if(!isValidFile(file)){
            alert("is not valid file")
            return
        }
        setFileMedia(file);

        if(file.type.includes('video')){
            
                setFilePreview(URL.createObjectURL(file));
        } else {
            console.error("File type not Supported");
        }
    };

    const isValidFile = (file) => {
        if(file.size > 50*1024*1024){
            console.error("File size exceeds 50MB");
            return false;
        }
        return true;
    }
    // 업로드 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileMedia);
        setFileMedia('');
        setFilePreview('');
    };


    // 파일 업로드 구현
    const onFileUpload = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("file", fileMedia);
        console.log(formData);
        await axios({
            headers: {
                "Content-Type": "multipart/form-data",
            },
            method: "POST",
            url: "http://localhost:8081/",  // 파일 업로드 요청 URL
            data: formData,
        }).then((res) => {
            console.log(res);
    }).catch(err => {
        alert('등록을 실패하였습니다.');
    });
    };

    return (
        <div>
            <div className='media-area'>
                {fileMedia && <video controls src={filePreview} />}
            </div>
            <IconButton aria-label='upload picture' component="label">
                <input
                    hidden
                    type="file"
                    accept='video/*'
                    onChange={fileImageHandler}
                    />
                <UploadIcon fontSize='large' />
            </IconButton>
            <Button onClick={deleteFileImage}>삭제</Button>
            <Button onClick={onFileUpload}>확정</Button>
        </div>
    );
}
export default UploadVideo;