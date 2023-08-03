import React from 'react'
import Card from './Card'

export default function Tours({tours, interestedHandler, removeHandler}) {
  return (
    <div className='container'>

    <div>
      <h2 className='title'>Plan With Love</h2>
    </div>
    <div className="cards">
    {
            tours.map((tour) =>{
                    return(
                        <Card {...tour} removeHandler={removeHandler}  interestedHandler={interestedHandler}/>
                    )
            })


        }
        </div>
 </div>
  )
}
