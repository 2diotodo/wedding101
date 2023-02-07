// 청첩장 프로세스3: 문구 변경
import './InvitationProcess03.css';

import { useNavigate } from 'react-router';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {TextField, Button} from '@mui/material/';
import ProgressBar from '../../components/common/ProgressBar';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';
import { useState } from 'react';
// import UploadText from '../../components/WeddingInvitation/UploadText';


const InvitationProcess03 = () => {
    const [form, setForm] = useState({
        textInput01: '',
        textInput02: '',
        textInput03: '',
    });

    const onChange = (e)=> {
        const newForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(newForm);
    }

    const navigate = useNavigate();
    const toProcess04 = () => {
        sessionStorage.setItem('textInput01', form.textInput01);
        sessionStorage.setItem('textInput02', form.textInput02);
        sessionStorage.setItem('textInput03', form.textInput03);

        navigate('/invitation04');
    };

    return(
        <div>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Mobile Invitation</h1>
                </Grid2>
                <Grid2 lg={9} sm={10}>
                        
                    <div className='process-main'>
                    <ProgressBar />
                    <h2>모바일 청첩장 문구 변경</h2>
                    <div className='text-form'>
                        <div className='invitation-form'>
                            <InvitationForm />
                            {form.textInput01}
                        </div>
                        <div className='upload-text'>
                        <div>
                            <TextField
                            id='textInput01'
                            name='textInput01'
                            type='text'
                            label='문구를 입력하세요'
                            variant='outlined'
                            value={form.textInput01}
                            onChange={onChange}
                            /> <br /> <br />
                            <TextField
                            id='textInput02'
                            name='textInput02'
                            type='text'
                            label='문구를 입력하세요'
                            variant='outlined'
                            value={form.textInput02}
                            onChange={onChange}
                            /> <br /> <br />
                            <TextField
                            id='textInput03'
                            name='textInput03'
                            type='text'
                            label='문구를 입력하세요'
                            variant='outlined'
                            value={form.textInput03}
                            onChange={onChange}
                            /> <br /> <br />

                        </div>
                        </div>
                    </div>
                    </div>
                        
                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess04}>다음</Button>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default InvitationProcess03;