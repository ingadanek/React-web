import React from 'react';
import '../styles/Escape.css';
import pic from '../images/hideout/hideout.jpg';

const image=[pic];
const text=["Witold Pilecki escaped during the night of 26th and 27th April and, several days later, got to the Home Army's headquarters in Warsaw. He devoted the subsequent months to writing his reports on Auschwitz which included detailed information concerning gas chambers and daily death tolls, as well as on medical experiments performed on inmates by Nazi doctors. Pilecki’s report, known to historians as Witold’s Report, together with two other documents created by ex-prisoners, forms the Auschwitz Protocols – the complete and ultimately credible data on the biggest death camp in history. The version of the report from 1943 was presented to the British Army's command but they thought it was exaggerated and rejected the Home Army’s suggestion that the camp should be liberated as soon as possible."];

const Escape =()=>{
    const img = image.map(element=>(
        <img key={element} src={element} title="A barn, the very first hideout of Witold Pilecki after his escape from Auschwitz, 1943" alt="Pilecki's hideout"/>
    ))

    const txt = text.map(element=>(
        <p key={element}>{element}</p>
    ))


    return (
    <div className="verso">
        {img}
        {txt}
    </div> );
}  
 
export default Escape;