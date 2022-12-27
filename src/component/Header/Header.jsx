import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md'
// import Logo from '../../asset/images/Logo.png'
import './Header.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Search from '../Search/Search';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='header__container app__flex'>
      <div className='Logo__box app__flex'>
        {/* <span><Link to='/'><Logo /></Link></span> */}
      </div>
      <div>
        <h1 className='logo__text'><Link to='/'>Jimmy IBRAH</Link></h1>
      </div>
      <div className='bars__menu-con bars__icons svg-icon'>
        <FaBars onClick={() => setToggle(true)}/>
        { toggle &&
          <div className='menu'>
            <div className='menu__wrapper app__columns'>
                {
                  ["Materia","About","Contact"].map(item => (
                    <div className='menu__link-div' key={`li-${item}`} onClick={() => setToggle(false)}>
                      <div className='dot'/>
                      <li className='menu__link'><Link to={`/${item}`} className='p__text'>{item}</Link></li>
                    </div>
  
                  ))
                }
            </div>
            <MdClose className='svg__icon menu__close' onClick={() => setToggle(false)}/>
          </div>
        }
      </div> 
    </div>
  )
}
