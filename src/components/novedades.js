import '../index.css';

function novedades(){
    return(
        <div className="container text-center mt-3 mb-2 mt-5">
        <div className="row mt-5">
            <div className="col-md-3 col-12 mb-5 mt-5 mx-auto">
                <h2 className='text-center mt-5 paddding-novedades'>Novedades</h2>
                <div className='text-center'>
                <button type="button" className="btn  btnfilter-pelis mt-1 text-center">Peliculas</button>
                <button type="button" className="btn  mt-1 btnfilter-series ml-1 text-center">Series</button>
                </div>
            </div>
        </div>
        <div className="row cards  mt-5"> 
            <div className="col-md-3 col-3 auto mb-5">
                <a href="" className="card">
                  <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path/></svg>                     
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>            
                      </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                  </div>
                </a>      
            </div>
            <div className="col-md-3 col-3 mx-auto mb-5">
                <div className="card">
                  <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>            
                      </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                  </div>
                </div>      
            </div>

            
            <div className="col-md-3 col-12 mx-auto mb-5">
                <div className="card">
                  <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                      <div className="card__header-text">
                        <h3 className="card__title">Jessica Parker</h3>            
                      </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                  </div>
                </div>      
            </div>

            <div className="col-md-3 col-12 mx-auto mb-5">
              <div className="card">
                <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <div className="card__header-text">
                      <h3 className="card__title">Jessica Parker</h3>            
                    </div>
                  </div>
                  <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
              </div>      
          </div> 
    </div>
    </div>
    );
}

export default novedades;