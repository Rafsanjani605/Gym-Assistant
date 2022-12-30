import React from 'react';
import './gymcom.css'

const Gymcom = (props) => {
  const {handleaddclick , component} = props;
    const {name, img, forage, time} = component;
    
    return (
        <div className='cardd py-4'>
            

            <div  className=" card w-90 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>age: {forage}</p>
    <h3>time required:<span> {time}</span> Minutes</h3>
    <div className="card-actions">
    
      <button onClick={() => handleaddclick(component)} className="btn btn-primary">
        Add to list
      </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Gymcom;
