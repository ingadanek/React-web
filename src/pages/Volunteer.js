import React from 'react';
import History from '../components/History';
import '../styles/Volunteer.css';

const article = [
    {title:`'Can one pick and choose when one wants to come to Auschwitz and when one wants to leave?' Pilecki replied: “One can.”
    `,
    text:'Auschwitz, also known as Auschwitz-Birkenau, opened in 1940 and was the largest of the Nazi concentration and death camps. Located in southern Poland, Auschwitz initially served as a detention center for political prisoners. However, it evolved into a network of camps where Jewish people and other perceived enemies of the Nazi state were exterminated, often in gas chambers, or used as slave labor. Some prisoners were also subjected to barbaric medical experiments led by Josef Mengele (1911-79). During World War II (1939-45), more than 1 million people, by some accounts, lost their lives at Auschwitz. In January 1945, with the Soviet army approaching, Nazi officials ordered the camp abandoned and sent an estimated 60,000 prisoners on a forced march to other locations. When the Soviets entered Auschwitz, they found thousands of emaciated detainees and piles of corpses left behind. At least 802 prisoners attempted to escape from the Auschwitz camps during the years of their operation, of which 144 were successful although the fates of 331 of the escapees are still unknown. A common punishment for escape attempts was death by starvation. Witold Pilecki was amongst those brave men who managed to escape Auschwitz. ',
    title2: 'The Auschwitz Volunteer',
    part1:'Pilecki’s plan was simple. He would get himself arrested, get thrown in Auschwitz and then start gathering and smuggling out intelligence about the place. In September 1940 the 39-year-old Polish cavalry officer, a member of the Polish resistance organisation Tajna Armia Polska (Secret Polish Army, TAP, later known as Armia Krajowa or Home Army) deliberately walked into a German roundup in Warsaw, and was sent by train to the new German camp. His astounding choice was made within, and for, Poland’s anti-Nazi underground. His superiors provided him with a false identity card in the name of "Tomasz Serafiński". He was the only known person ever to volunteer to be imprisoned in Auschwitz.',
    part2:'In the camp Pilecki was known as Tomasz Serafiński (Prison Number 4859) and began the work of organising the Związek Organizacji Wojskowej. ZOW would become the Auschwitz branch of Armia Krajowa and its aims were, inter alia, to improve inmate morale, provide news from outside, and set up intelligence networks. ZOW was organized in a cell network of "Fives". Each five agents knew nothing about their comrads. By 1941 ZOW had grown with "High Five" creating sub-groups. The organisation had its own system of enforcing order (with a secret criminal court). Thanks to civilians living nearby, the organisation received medical supplies. Inmates even constructed a radio receiver and hid it in the camp hospital. By spring of 1942, the organization had over 1,000 members, including women.',
    part3:'Pilecki was assigned to a night shift at a camp bakery outside the fence. He and two comrades (Jan Redzej and Edward Ciesielski) overpowered a guard, cut the phone line, and escaped on the night of 26/27 April 1943, taking with them documents stolen from the Germans. The men fled on foot to the village of Alwernia where they were helped by a priest, and then on to Tyniec where locals assisted them. After that they reached the Polish resistance safe house near Bochnia, owned, coincidentally, by commander Tomasz Serafiński—the very man whose identity Pilecki had adopted for his cover in Auschwitz. At one point during the journey, German soldiers attempted to stop Pilecki, firing at him as he fled; several bullets passed through his clothing, while one struck him without hitting either bones or vital organs.'
}
]

const footer = <footer><p>&copy; 2020</p> </footer>

const Volunteer = () => {
    const item = article.map(element=>(
        <History key={element.title} {...element}/>
    ));
   
    return (  
        <div className="page">
           {item}
           {footer}
        </div>
        
    );
}
 
export default Volunteer;