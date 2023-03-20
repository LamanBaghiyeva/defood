import React from 'react'
import card from "../components/card.json"
import Cards from "../components/Cards"
import "./Card.css"
const CardProps = () => {
  return (
    <div className="container ps-5 pt-5">
        <div className='row '>
         {
        card.map(i=>(
          <Cards key={i.id} mealname={i.name} mealtext={i['text ']} mealpic={i.img} chef={i.chef} date={i.date} button={i.button} />
        ))
      }

    </div>
    
    </div>
  )
}

export default CardProps