import React from 'react'
import NyhederLille from './NyhedLille'
import NyhedStor from './NyhedStor';

const Nyheder = () => {
    return ( 
        <div className="container">
            <NyhedStor />
            <NyhederLille />
        </div>
     );
}
 
export default Nyheder;
