import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './HomeContact.scss'
import Shop from '../../asset/images/Jimmy2.jpg'
import { MdLocationPin } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'


export default function HomeContact() {
  return (
    <div className='Home__contact-con app__columns'>
        <SectionTitle text='Contact Us' />
        <div className='app__columns Home__contact'>
            <div className="Home__contact-img-con">
               <img src={Shop} alt='shop'/>  
            </div>
            <div className='app__columns  Home__contact-desc'>
                <div><span><MdLocationPin /></span><p>No.3 sabo, lagos</p></div>
                <div><span><BsTelephoneFill /></span><a href='tel:09076524078'> 09076524078</a></div>
                <div><span><MdEmail /></span><a href='mailto:onifadejohnson2014@gmail.com'>Onifadejohnson2014@gmail.com</a></div>
            </div>
        </div>
    </div>
  )
}
