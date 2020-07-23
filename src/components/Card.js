import React from 'react';

const Card = ({property}) => {
    const {index, image, details} = property;
    return ( 
        
       <div id={`card-${index}`} className='card'>
       <img src={image} alt="Witold Pilecki"/>
       <h3>{details}</h3>
       </div>
    )
}
 
export default Card;