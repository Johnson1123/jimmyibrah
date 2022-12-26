import React from 'react'
import './Features.scss'
import  Special from '../../asset/images/Italinian__chinos.jpg'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function Features() {
  return (
    <div className='Fea__con app__columns'>
        <SectionTitle text='Feature Categories'/>
        <div className="Fea__product-con app__flex">
            <div className="Fea__product">
                <img src={Special} alt='' />
                <div className="Fea__desc app__columns">
                    <p className='p__text'>Browse</p>
                    <h3 className='cat__text'>Itallian Chinos</h3>
                    <p className='price__tag'><span>#34,000</span> - <span>#36,000</span></p>
                </div>
            </div>
            <div className="Fea__product">
                <img src={Special} alt='' />
                <div className="Fea__desc app__columns">
                    <p className='p__text'>Browse</p>
                    <h3 className='cat__text'>Itallian Chinos</h3>
                    <p className='price__tag'><span>#34,000</span> - <span>#36,000</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
