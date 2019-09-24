import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Aktiviteter = () => {

    const [aktivite]= useState([
       
        {aktiv: 'cover_bolig-paa-landet.jpg', overskrift: 'Bolig på landet ', producttext: 'Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund. ', link: 'Læs mere her', id: 1},
        {aktiv: 'cover_hestepension.jpg', overskrift: 'Hestepension', producttext: 'Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald', link: 'Læs mere her', id: 2},
        {aktiv: 'cover_verdensballet_aktiviteter.jpg', overskrift:'Verdensballetten', producttext: 'Verdensballet – charmerende udendørsforestilling, 13 juli 2018 på Møllerup.', link: 'Læs mere her', id: 3},
        {aktiv: 'cover_hamp.jpg', overskrift:'Møllerup Hamp', producttext: 'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', link: 'Køb produkter her', id: 4},
        {aktiv: 'cover_events.jpg', overskrift:'Møder og events', producttext: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet', link: 'Læs mere her', id: 5},
        {aktiv: 'cover_fest.jpg', overskrift:'Fest på kroen', producttext: 'Lej Hubertus Kroen og hold fest for op til 80 pers. I romantiske og historiske rammer.', link: 'Læs mere her', id: 6},
        {aktiv: 'cover_rundvisninger.jpg', overskrift:'Rundvisninger', producttext: 'Bestil en rundvisning på Møllerup. Lær noget om historien, jagten, og livet på Møllerup.', link: 'Læs mere her', id: 7},
        {aktiv: 'cover_hudpleje.jpg', overskrift:'Hamp hudpleje', producttext: 'Prøv Møllerups nye husplejeserie baseret på de næringsrige olie på hampens frø.', link: 'Læs mere her', id: 8},
        {aktiv: 'cover_foedevarer.jpg', overskrift:'Hamp fødevarer', producttext: 'Prøv fødevarer udviklet på baggrund af frøerne fra den sunde hamp fra Møllerup', link: 'Læs mere her', id: 9},
        {aktiv: 'cover_bogen.jpg', overskrift:'Møllerup bogen', producttext: 'Der er kød og blod på historien. Læs mere om Marsk Stig og livet på Møllerup.', link: 'Køb bogen her', id: 10},
        {aktiv: 'cover_jagt.jpg', overskrift:'Møllerup jagt', producttext: 'Professionel jagt i kuperel og varieret landskab med mange fasaner og råvildt.', link: 'Læs mere her', id: 11},
        {aktiv: 'cover_ferie-for-40.jpg', overskrift:'Ferie for 40', producttext: 'Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl. pool', link: 'Læs mere her', id: 12}
       
    ]);

    return ( 
        
                
                <div className="aktiviteter-list pt-5 ">
                <h5>Møllerup Gods tilbyder en perlerække af muligheder</h5>
                <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
                    <div className="col-12">
                        <div className="row">
                    {aktivite.map(n => {
                        return ( 
                            <div key={n.id} className="col-12 col-lg-4 col-md-6 mb-3">
                                <img className="img-fluid w-100" src={"/img/" + n.aktiv} alt="aktivite"/>
                                <h4>{n.overskrift}</h4>
                                <p> {n.producttext} </p>
                                <NavLink className="text-danger" to="#"> {n.link} </NavLink>
                            </div>
                         );
                    })}
                    </div>
                    </div>
                </div>
                    
     );
}
 
export default Aktiviteter;