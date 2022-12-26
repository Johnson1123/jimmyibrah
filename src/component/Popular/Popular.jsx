import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Popular.scss'
import Products from '../../asset/images/Jimmy2.jpg'
import Button from '../Button/Button'

export default function Popular() {
  return (
    <div className='Pop__con app__columns'>
        <SectionTitle text="Popular Materias" />
        <div className="Pop__product-con app__flex">
            <div className="Pop__product app__columns">
                <div className='Pop__product-img'>
                  <img src={Products} alt='product'/>
                </div>
                <div className="Pop__desc ">
                  <h3 className='Pop__text'>Itianlian Chinos</h3>
                  <p className='price__tag'>#30,000</p>
                  <p className='p__text'>Per Yard</p>
                  <Button values='View Detail'/>
                </div>
            </div>
            <div className="Pop__product app__columns">
                <div className='Pop__product-img'>
                  <img src={Products} alt='product'/>
                </div>
                <div className="Pop__desc ">
                  <h3 className='Pop__text'>Itianlian Chinos</h3>
                  <p className='price__tag'>#30,000</p>
                  <p className='p__text'>Per Yard</p>
                  <Button values='View Detail'/>
                </div>
            </div>
        </div>
    </div>
  )
}
