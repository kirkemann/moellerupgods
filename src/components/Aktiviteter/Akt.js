import React from 'react'
import {NavLink} from 'react-router-dom';

const Akt = (props) => {
    return ( 
        <div key={props.n.id} className="col-12 col-lg-4 col-md-6 mb-3">
            <img className="img-fluid w-100" src={"/img/" + props.n.aktiv} alt="aktivite"/>
            <h4>{props.n.overskrift}</h4>
            <p> {props.n.producttext} </p>
            <NavLink className="text-danger" to="#"> {props.n.link} </NavLink>
        </div>

     );
}
 
export default Akt;