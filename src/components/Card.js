import { useState } from 'react';
import './Card.css';

function Card({id,title,price,image,info,remove}){
 
    const [readmore,setreadmore]=useState(false);
    const description=readmore?info:`${info.substr(0,200)}...`;
    function read(){
        setreadmore(!readmore) 
    }
    function filter(){
        remove(id);
    }
    
    return(
     <div className='card'>
       <div className='card-image'>
        <img src={image}></img>
       </div>
       <div className='card-details'>
        <p className='price'>{price}</p>
        <h2>{title}</h2>
        <p>{description}<span onClick={read}>
            {readmore? `Show less` : `Read more`}
            </span></p>
       </div>
     <button className='not' onClick={filter}>Not Intrested</button>
     </div>
    )
}
export default Card;