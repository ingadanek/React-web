import React from 'react';
import Article from '../components/Article';
import Quotes from '../components/Quotes';
import '../styles/Bio.css';



const article = [
  {title:'"I would prefer to lose my life rather than to stay alive with a wound in my heart..." (W.Pilecki)',
   text:"Unbreakable soldier, cursed soldier, a soldier of the “Lost Republic of Poland”, “a volunteer to Auschwitz”, one of the six bravest men of the European resistance movement during World War II. He is the symbol of Poland, which – as the result of the actions of the Soviet Russia and Nazi occupation – has been irretrievably lost. He belonged to the pre partition generation, whose mission was to regain independence by Poland and when it happened – work for the free homeland. He was an intelligence agent and resistance leader. He served as a cavalry officer in the Polish Army in the World War II. Pilecki was also a co-founder of the Secret Polish Army resistance group. He was the author of Witold's Report, the first comprehensive intelligence report on the atrocities committed at the Auschwitz concentration camp. Volunteering for Ausch­witz and ­remaining there for almost three years was the most courageous thing Pilecki ever did, perhaps one of the most courageous things anyone has ever done. But it was not his only deed of bravery, and not the one that killed him. At war’s end in 1945, Pilecki made for Italy, to report to the command of a Polish Army that had helped the Americans and the British defeat the Germans.“The Ausch­witz Volunteer,” the document we are now so fortunate to have, was composed in Italy, just before his return to Poland, because he suspected that he would not survive. The Soviet re-entrance into Poland brought with it the progressive installation of a Communist regime.                                      Pilecki returned to his homeland in October 1945 to report on the takeover, but in 1947 the Polish Communist secret police arrested him. Before his trial, he was tortured, but he didn’t reveal any names. He was accused of illegal border crossing, use of forged documents, not enlisting with the military, carrying illegal arms and espionage for General Władysław Anders. Pilecki called his actions legal and in the true interest of Free Poland. He was sentenced to death and executed with a shot to the back of the head on 25 May 1948."}
]
const quotes = [
    {   id:1,
        text1: "A searing account … a fitting memorial to one of Poland's greatest war heroes and a shaming indictment of the western allies' failure to act",
        author1: " – Sunday Times"
    },
    {   id:2,
        text2: 'An extraordinary story',
        author2: '– The Times'
    },
    {   id:3,
        text3: 'This astonishing account of Witold Pilecki, a member of the Warsaw resistance who tried to incite rebellion in the camps, won the Costa biography award',
        author3: '– The Guardian'
    }
]

const footer = <footer className='biog'><p>&copy; 2020</p> </footer>

const Bio = () => {
    const art=article.map(element=>(
   <Article key={element.title} {...element}/>
    ))
    const quo=quotes.map(element=>(
        <Quotes key={element.id}{...element}/>
    ))
    
    return (  
        <div className="page">
        {art}
        {quo}
        {footer}
        </div>
    );
}
 
export default Bio;