import React, { useState } from 'react';

const NyhedStor = () => {

    const [nyheder]= useState([
        {nyhed: 'cover-nyhed_verdensballet.jpg', overskrift: 'Verdensballetten på Møllerup Gods lørdag d. 12. juli 2019 blev en skøn aften', producttext: 'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020 ', id: 1}
    ]);

    return ( 
        
                
                <div className="nyhedstor-list pt-5">
                    <div className="products col-12">
                    {nyheder.map(n => {
                        return ( 
                            <div key={n.id} className="text-left">
                                <img className="img-fluid w-100 pb-2" src={"/img/" + n.nyhed} alt="sko"/>
                                <h5>{n.overskrift}</h5>
                                <p> {n.producttext} </p>
                            </div>
                         );
                    })}
                    </div>
                </div>
                    
     );
}
 
export default NyhedStor;