import UploadIcon from '@mui/icons-material/Upload';
import axios from 'axios';

function UploadMedia() {

    const onSubmit = async (e) => {
        e.preventDefault();

        let files = e.target.profile_files.files;
        let formData = new FormData();
        const data = [
            
        ]
        formData.append("files", files.current.files[0]);
        formData.append("data", new Blob([JSON.stringify(data)], {
            type: "application/json"
        }));


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
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="file"
                name="profile_files"
                accept='image/*'
                multiple="multiple"
                />
            <button type="submit">
                <UploadIcon fontSize='large'/>
            </button> 
        </form>
    );
}
export default UploadMedia;