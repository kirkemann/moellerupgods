import React from 'react';
import Instagram from './Outro/Instagram';
import UseTwitter from './UseTwitter';

const KontaktOs = () => {
    return ( 
        <div className="container">
            <h1 className="text-center mt-5 mb-5">Kontakt Os</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Fulde Navn</label>
                    <input type="text" class="form-control" id="inputText4" placeholder="Fornavn Og Efternavn" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="adresse" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">By</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="By" />
                    </div>
                    
                    <div class="form-group col-md-6">
                    <label for="inputZip">PostNummer</label>
                    <input type="text" class="form-control" id="inputZip" placeholder="Post nummer" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Besked: </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary mb-5">Send Besked</button>
            </form>          
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
 
export default KontaktOs;