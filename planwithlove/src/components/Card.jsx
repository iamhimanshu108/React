import React from'react';
import { useState } from 'react';

function Card({id, image, info, name, price, reomveTour}) {
    const [readmore, setReadmore] = useState(false);
    function readmorehandler(){
        setReadmore(!readmore);
    }
    const description = `${info.substring(0,100)}...`

   
    return(
            <div className='card'>

                <img src={image} className='image'  />

                <div className='tour-info'>

                <div className='tour-details'>
                    <h4 className='tour-price'>{price}</h4>
                    <h4 className='tour-name'>{name}</h4>

                    <div className='description'>
                        {description}
                        <span className='read-more' onClick={readmorehandler}>
                            {readmore ? `Show-less` : `Read More`}
                        </span>
                    </div>
                </div>
                    <button className='btn-red' onClick={ () => reomveTour(id)}>Not Interseted</button>
                </div>


            </div>
    )

}

export default Card;