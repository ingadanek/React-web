import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import image1 from '../images/Volunteer/escape1.jpg';
import image2 from '../images/Volunteer/escape2.jpg';
import image3 from '../images/Volunteer/escape3.jpg';
const History = ({title, title2, text, part1, part2, part3}) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
        }, []);
    return ( 
        <div className="history">
        <div className="main">
            <h2>{title}</h2>
            <p>{text}</p>
            <h2>{title2}</h2>
        </div>
        <section className="parts">
            <div data-aos='fade-right' className="part1">
                <p>{part1}</p>
                <div className="pic1">
                <img src={image1} alt="Pilecki's family"/>
                </div>
             <Link to='/escape'><button><span>more</span></button></Link>
            </div>
            <div data-aos='fade-left' className="part2">
                <p>{part2}</p>
                <div className="pic2">
                <img src={image2} alt="Pilecki the soldier"/>
                </div>
            <Link to='/escape'><button className='but'><span>more</span></button></Link>
            </div>
            <div data-aos='fade-right' className="part3">
                <p>{part3}</p>
                <div className="pic3">
                <img src={image3} alt='The escapers'/>
                </div>
                <Link to='/escape'><button>more</button></Link>
            </div>
            </section>
        </div>
     );
}
 
export default History;