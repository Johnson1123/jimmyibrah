import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer__container app__columns'>
      <p className='footer__text p__text'>
        <span>&copy;</span> - <span>Jimmy Ibrah TiTex Fabrics Nig.Enterp.</span>
      </p>
      <div className="footer-icons app__flex">
        <Link to='https://facbook.com'><AiFillFacebook /></Link>
        <Link to='https://facbook.com'><AiFillInstagram /></Link>
        <Link to='https://facbook.com'><AiFillTwitterSquare /></Link>
      </div>
    </div>
  )
}
