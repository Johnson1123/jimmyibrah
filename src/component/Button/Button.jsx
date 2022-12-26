import React from 'react'
import './Button.scss'

export default function Button(props) {
  return (
    <button className='p__text app__btn'>{props.values}</button>
  )
}
