import axios from 'axios';
import './ModifyForm.css';
import { useEffect, useState } from 'react';

function ModifyForm() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    }

    return (
        <div>
            <button type='text' onClick={showModal}>내 정보</button>
            
        </div>
    );
}
export default ModifyForm;

// function Modal({setModalOpen} : PropsType) {
//     const closeModal = () => {
//         setModalOpen(false);
//     };

// }