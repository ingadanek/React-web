import React from 'react';
const Quotes = (props)=>{
    return(
          <aside>
             <blockquote>
                 <p>{props.text1}
                 </p>
                 <p>
                     <strong>{props.author1}</strong>
                 </p>
             </blockquote>
             <blockquote>
                 <p>{props.text2}
                 </p>
                 <p>
                     <strong>{props.author2}</strong>
                 </p>
             </blockquote>
             <blockquote>
                 <p>{props.text3}
                 </p>
                 <p>
                     <strong>{props.author3}</strong>
                 </p>
             </blockquote>
         </aside>
    )
}

export default Quotes;