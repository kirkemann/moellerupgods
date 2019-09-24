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
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Velkommen
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="Jagt">Jagt</NavLink>
          <NavLink className="dropdown-item" to="Hestpension">Hestpension</NavLink>
          <NavLink className="dropdown-item" to="lej_kontor">Lej Kontor</NavLink>
          <NavLink className="dropdown-item" to="lej_bolig">Lej Bolig</NavLink>
          <NavLink className="dropdown-item" to="Mollerup_bogen">Møllerup bogen</NavLink>
          <NavLink className="dropdown-item" to="hampefro_til_udsaed">Hampefrø til udsæd</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Verdensballetten
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="Verdensballetten_erhver">Verdensballetten erhverv</NavLink>
          <NavLink className="dropdown-item" to="Samarbejdspartnere">Samarbejdspartnere</NavLink>
          <NavLink className="dropdown-item" to="Glade_gaester">Glade gæster</NavLink>
          <NavLink className="dropdown-item" to="Gourmetoplevelser">Gourmetoplevelser</NavLink>
          <NavLink className="dropdown-item" to="Praktisk_info">Praktisk info</NavLink>
          <NavLink className="dropdown-item" to="Bliv_frivillig">Bliv frivillig</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Nyheder">Nyheder</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Event og mødefaciliteter
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="Ferie">Ferie</NavLink>
          <NavLink className="dropdown-item" to="fest_paa_moellerup_gods">Fest på Møllerup Gods</NavLink>
          <NavLink className="dropdown-item" to="Moeder">Møder</NavLink>
          <NavLink className="dropdown-item" to="Oplevelser">Oplevelser</NavLink>
          <NavLink className="dropdown-item" to="Rundvisninger">Rundvisninger</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Hvad_siger_vores_gaester">Hvad siger vores gæster</NavLink>
      </li>
      
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Om Møllerup Gods
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink className="dropdown-item" to="Hele_historien">Hele historien</NavLink>
          <NavLink className="dropdown-item" to="Galleri">Galleri</NavLink>
          <NavLink className="dropdown-item" to="Virksomheder_paa_moellerup">Virksomheder på Møllerup</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Kontakt_os">Kontakt os</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="Webshop">Webshop</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
     );
}
 
export default HeaderNavbar;