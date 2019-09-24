import React from 'react';
import Logo from '../img/logo_gods.png'
import {NavLink} from 'react-router-dom';

const HeaderLogo = () => {
    return ( 
        <div className="container">
            <NavLink to="/"><img src={Logo} className="rounded mx-auto d-block mb-3 mt-5" alt="Logo" /></NavLink>
        </div>
        
     );
}
 
export default HeaderLogo;

