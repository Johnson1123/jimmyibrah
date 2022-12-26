import React from 'react'
import shoppingBag from '../../asset/images/shopping__bag.jpg'
import ShopBtn from '../ShopBtn/ShopBtn'
import './Slide.scss'

export default function Slide() {
  return (
    <div className='slides'>
        <div className='slide'>
          <img src={shoppingBag} alt="shopping bag" />
            <div className='slide__desc app__columns'>
                <h3 className='p__text'>New Materias</h3>
                <h4 className='sub__text'>Best Quality</h4>
                <ShopBtn values='SHOP NOW'/>
            </div>
        </div>
    </div>
  )
}
