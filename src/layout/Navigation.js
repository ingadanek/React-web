import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css';



const list=[
    {name:'Captain Witold Pilecki', id:1, path:'/', exact:true},
    {name:'Biography', id:2, path:'/bio'},
    {name:'The Auschwitz Volunteer', id:3, path:'/volunteer'},
    {name:'Photo Gallery', id:4, path:'/photos'},
]

const Navigation = () => {
    const paths = list.map(element=>(
        <li key={element.id}>
        <NavLink exact={element.exact? true:false} to={element.path}>
         {element.name}
        </NavLink>
        </li>
    ));
    return ( 
    <div className="navi">
       <ul>
           {paths}
       </ul>
       </div>
     );
}
 
export default Navigation;