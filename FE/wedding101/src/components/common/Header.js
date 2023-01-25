
import './Header.css';

import React from 'react';
// import { Link } from 'react-router-dom';
import { Tab, Tabs, Box } from '@mui/material';

// function LinkTab(props){
//     return (
//         <Tab component={"Link"} onClick={(event) => {
//             event.preventDefault();
//         }}
//         {...props}
//         />
//     );
// }

function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="About" to="/" />
                <Tab label="Invitation" to="/invitation" />
                <Tab label="Album" to="/album" />
                <Tab label="Review" to="/review" />
                <Tab label="Contact Us" to="/area02" />
                <Tab label="LogIn" to="/user/login" />
                <Tab label="SignUp" to="/user/signup" />
            </Tabs>
        </Box>
    );
}
export default Header;