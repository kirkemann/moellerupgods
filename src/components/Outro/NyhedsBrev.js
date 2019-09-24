import React from 'react'

const NyhedsBrev = () => {
    return ( 
       
            
                <div className="col-12 col-lg-3 nyhedcolor">
                    <div className="textnyheds mt-3">
                        <h5>Tilmeld nyhedsbrev</h5>
                        <p className="text-right" ><span>*</span>skal udfyldes</p>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address <span>*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Fornavn</label>
                            <input type="text" className="form-control" id="exampleInputText" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputText2">Efternavn</label>
                            <input type="text" className="form-control" id="exampleInputText2"  />
                        </div>
                        
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Møllerup - alle</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Verdensballetten</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Møllerup Hamp</label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Telmeld</button>
                    </form>
                </div>
            
        
     );
}
 
export default NyhedsBrev;