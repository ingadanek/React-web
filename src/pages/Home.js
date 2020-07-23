import React from 'react';
import '../styles/Home.css';

import img1 from '../images/Home/Pilecki1.jpg';
import img2 from '../images/Home/Pilecki2.jpg';
import img3 from '../images/Home/Pilecki3.jpg';

const text=['One of the greatest', 'Unbreakable soldier', 'The unforgotten'];
 
const images =[img1, img2, img3];

const Home = () => {
    const txt =text.map(element=>(
        <h1 key={element}>{element}</h1>
    ))
    const img = images.map(element=>(
        <img key={element} src={element} alt="Pilecki"/>
    ))
    return (
       <div className="page">
        <div className="home">
        {txt}
        {img}
        </div>
      </div>
    );
}
 
export default Home;