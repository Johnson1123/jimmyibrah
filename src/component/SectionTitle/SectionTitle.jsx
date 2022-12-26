import React from 'react'
import './SectionTitle.scss'

export default function SectionTitle(props) {
  return (
    <div className='app__flex sub__text-con'>
        <span className='line'></span>
            <p className='sub__text'>{props.text}</p>
        <span className='line'></span>
    </div>
  )
}
