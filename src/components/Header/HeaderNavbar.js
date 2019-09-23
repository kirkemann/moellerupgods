import React from 'react'

const HeaderNavbar = () => {
    return ( 
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Velkommen
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Verdensballetten
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Nyheder</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Event og mødefaciliteter
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Hvad siger vores gæster</a>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Om Møllerup Gods
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Kontakt os</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Webshop</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
     );
}
 
export default HeaderNavbar;