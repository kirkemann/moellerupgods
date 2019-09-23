import React from 'react'
import DkcLogo from '../img/logo_DKC.png'

const Dkcside = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={DkcLogo} alt="Dkc Logo"/>
                </div>
            </div>
                <div className="row">
                <div className="col-12">
                    <a className="text-decoration-none text-danger" href="https://dkbs.dk/">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</a>
                </div>
                </div>
            </div>
        
     );
}
 
export default Dkcside;