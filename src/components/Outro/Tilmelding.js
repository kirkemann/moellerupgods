import React from 'react'
import Instagram from './Instagram';
import NyhedsBrev from './NyhedsBrev';

const Tilmelding = () => {
    return ( 
        <div className="container">
            <div className="row">
                <Instagram />
                <NyhedsBrev />
            </div>
        </div>
     );
}
 
export default Tilmelding;