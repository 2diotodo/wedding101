import axios from 'axios';
import './ModifyForm.css';

function ModifyForm() {
    const getUser = () => {
        try {
            return axios.get('http://i8a101.p.ssafy.io/user/', {
                params: {
                    userSeq : 1
                }
            });
        } catch(error) {
            console.log(error)
        }
    };

    

    return (
        <div>
            <h3>내 정보</h3>
            
        </div>
    );
}
export default ModifyForm;