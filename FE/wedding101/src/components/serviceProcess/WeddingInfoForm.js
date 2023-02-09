import { TextField } from '@mui/material';
import { useState } from 'react';
import './WeddingInfoForm.css';

function WeddingInfoForm(props){

    const onSubmitHandler = () => {
        
    }
    return (
        <div className='wedding-info-form'>
            <h3>예비 신랑</h3>
            <form onSubmit={onSubmitHandler} >

                <TextField />

            </form>
        </div>
    )
}

export default WeddingInfoForm;