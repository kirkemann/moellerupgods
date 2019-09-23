import React from 'react'
import HeaderLogo from './HeaderLogo';
import HeaderNavbar from './HeaderNavbar';
import HeaderSprog from './Headersprog';


const Header = () => {
    return ( 
        <div className="container">
            <HeaderSprog />
            <HeaderLogo />
            <HeaderNavbar />
        </div>
     );
}
 
export default Header;