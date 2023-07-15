import React from 'react'
import './card.scss'
const Card = ({ image, text }) => {
  return (
    <div className='CardBody'>
      <img src={image} />
      <p>{text}</p>
    </div>
  )
}

export default Card 
