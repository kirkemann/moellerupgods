import React from 'react'

const HeaderSprog = () => {
    return ( 
        <div className="container">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose language
            </button>
            <div className="dropdown-menu bg-secondary" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">Dansk</button>
              <button className="dropdown-item" type="button">Engelsk</button>
            </div>
          </div>
        </div>
     );
}
 
export default HeaderSprog;