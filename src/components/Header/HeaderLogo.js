import React from 'react';
import Logo from '../img/logo_gods.png'

const HeaderLogo = () => {
    return ( 
        <div className="container">
            <img src={Logo} className="rounded mx-auto d-block mb-3 mt-5" alt="Logo" />
        </div>
        
     );
}
 
export default HeaderLogo;

