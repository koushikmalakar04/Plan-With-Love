import React, { useState } from 'react'
export default function Card({id, name, info, image, price,  interestedHandler, removeHandler}) {

    const[readMore , setReadMore] = useState(false)
    
    const description = readMore ? info : `${info.substring(0, 200)}....`

    function readMoreHandler(){
        if(!readMore){
            setReadMore(true);
        }else{
            setReadMore(false);
        }
    }

  return (
    <div className='card'>

      <img src={image} alt="" className='image'/>
      <div className="tour-info">
      <div className='tour-details'>
        <h4 className='tour-price'>&#8377;&nbsp;{price}</h4>
        <h4 className='tour-name'>{name}</h4>
      </div>

        <div className='desription'>
            {description}
            <span className='read-more' onClick={readMoreHandler}>
                {readMore ? "....Show less" : "Read More"}
            </span>
        </div>
      </div>

            <button className='btn-green' onClick={() => interestedHandler(id)}>
                Interested
            </button>
            <button className='btn-red' onClick={() => removeHandler(id)}>
                Not Interested
            </button>
            
    </div>
  )
}
