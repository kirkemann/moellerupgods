import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderNavbar = () => {
    return ( 
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Velkommen
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" href="/">Jagt</NavLink>
          <NavLink className="dropdown-item" href="/">Hestpension</NavLink>
          <NavLink className="dropdown-item" href="/">Lej Kontor</NavLink>
          <NavLink className="dropdown-item" href="/">Lej Bolig</NavLink>
          <NavLink className="dropdown-item" href="/">Møllerup bogen</NavLink>
          <NavLink className="dropdown-item" href="/">Hampefrø til udsæd</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Verdensballetten
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" href="/">Verdensballetten erhverv</NavLink>
          <NavLink className="dropdown-item" href="/">Samarbejdspartnere</NavLink>
          <NavLink className="dropdown-item" href="/">Glade gæster</NavLink>
          <NavLink className="dropdown-item" href="/">Gourmetoplevelser</NavLink>
          <NavLink className="dropdown-item" href="/">Praktisk info</NavLink>
          <NavLink className="dropdown-item" href="/">Bliv frivillig</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/">Nyheder</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Event og mødefaciliteter
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" href="/">Ferie</NavLink>
          <NavLink className="dropdown-item" href="/">Fest på Møllerup Gods</NavLink>
          <NavLink className="dropdown-item" href="/">Møder</NavLink>
          <NavLink className="dropdown-item" href="/">Oplevelser</NavLink>
          <NavLink className="dropdown-item" href="/">Rundvisninger</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/">Hvad siger vores gæster</NavLink>
      </li>
      
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Om Møllerup Gods
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" href="/">Hele historien</NavLink>
          <NavLink className="dropdown-item" href="/">Galleri</NavLink>
          <NavLink className="dropdown-item" href="/">Virksomheder på Møllerup</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/">Kontakt os</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" href="/">Webshop</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
     );
}
 
export default HeaderNavbar;