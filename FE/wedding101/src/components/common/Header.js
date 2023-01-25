import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

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
  

    return (
        <div className='header'>
                <NavLink to="/">About </NavLink>
                <NavLink label="Invitation" to="/invitation">Invitation </NavLink>
                <NavLink label="Album" to="/album" >Album </NavLink>
                <NavLink label="Review" to="/review" ></NavLink>
                <NavLink label="Contact Us" to="/area02" >Contact Us </NavLink>
                <NavLink label="LogIn" to="/user/login" >LogIn </NavLink>
                <NavLink label="SignUp" to="/user/signup" >SignUp </NavLink>
        </div>
    );
}
export default Header;