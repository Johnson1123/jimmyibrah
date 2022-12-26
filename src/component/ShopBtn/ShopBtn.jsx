import React from 'react'
import './ShopBtn.scss'

export default function ShopBtn(props) {
  return (
    <button className='shop__btn'>{props.values}</button>
  )
}

