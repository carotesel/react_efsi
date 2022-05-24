import React from 'react'

export default function card() {
  return (
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
  );
}
