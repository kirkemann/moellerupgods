import React, { useState } from 'react';

const NyhederLille = () => {

    const [nyheder]= useState([
       
        {nyhed: 'cover_nyhed_hampeprodukter.jpg', overskrift: 'Køb vores hampeprodukter', producttext: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som kan købe her på webshoppen. ', id: 1},
        {nyhed: 'cover_nyhed_verdensballet_lille.jpg', overskrift: 'Verdensballetten 2019', producttext: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods. ', id: 2},
        {nyhed: 'cover_nyhed_historie.jpg', overskrift:'Historien om Møllerup Gods ', producttext: 'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven', id: 3}
       
    ]);

    return ( 
        
                
                <div className="nyhedlille-list pt-5 ">
                    <div className="col-12">
                        <div className="row">
                    {nyheder.map(n => {
                        return ( 
                            <div key={n.id} className="text-left col-12 col-lg-4 col-md-6">
                                <img className="img-fluid" src={"/img/" + n.nyhed} alt="sko"/>
                                <h5>{n.overskrift}</h5>
                                <p> {n.producttext} </p>
                            </div>
                         );
                    })}
                    </div>
                    </div>
                </div>
                    
     );
}
 
export default NyhederLille;