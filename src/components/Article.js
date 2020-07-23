import React from 'react';
const Article = ({title,text}) => {
    return ( 
        <>
        <div className="bio">
            <h2>{title}</h2>
         <p>
         {text}
         </p>
         </div>
        </>

     );
}
 
export default Article;