import React from 'react'
import './Speech.scss'
import CEO from '../../asset/images/shop.jpg'

export default function Location() {
  return (
    <div className='Loc__con app__columns'>
        <div className="ceo__image-con">
          <img src={CEO} alt="Jimmy ibrah" />
        </div>
        <h3 className='cat__text'>Meet Our CEO</h3>
        <p className="p__text">
            We have two shop full of fabrics from Itianlia Chinos, Special, Spider shirt materia, Special trouser, Uniform Shirt and much more
        </p>
        <div className='Loc__location'>
            <p className='sub__text visit__us'>Please.. come and visit us at: </p>
            <p className='p__text'>Jimmy Ibrah Titex Fabrics Nig.Enterp</p>
            <p className='p__text'><span>Address: </span> No.3 sabo, lagos</p>
        </div>
    </div>
  )
}
