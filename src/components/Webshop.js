import React from 'react';
import UseTwitter from './UseTwitter';
import Instagram from './Outro/Instagram';

const Webshop = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12 mt-4">
                    <h3>Følg os på Twitter</h3>
                    <UseTwitter />
                </div>
                <div className="col-lg-4 col-12 mt-4">
                    <h3 className="text-center">Følg os på Instagram</h3>
                    <Instagram />
                </div>
            </div>
        </div>
     );
}
 
export default Webshop;