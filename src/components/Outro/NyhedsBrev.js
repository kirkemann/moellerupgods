import React from 'react'

const NyhedsBrev = () => {
    return ( 
        <div className="container">
            
                <div className="col-3">
                <div className="textnyheds mt-3"><h5>Tilmeld nyhedsbrev</h5></div>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Fornavn</label>
                            <input type="text" class="form-control" id="exampleInputText" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Fornavn</label>
                            <input type="text" class="form-control" id="exampleInputText2"  />
                        </div>
                        
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Møllerup - alle</label>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                            <label class="form-check-label" for="exampleCheck1">Verdensballetten</label>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck3" />
                            <label class="form-check-label" for="exampleCheck1">Møllerup Hamp</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Telmeld</button>
                    </form>
                </div>
            
        </div>
     );
}
 
export default NyhedsBrev;