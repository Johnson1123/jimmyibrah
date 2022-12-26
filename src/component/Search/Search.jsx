import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './Search.scss'


export default function Search(props) {
  return (
    <div className='app__flex search__con'>
        <form><input type='text'/></form>
        <button className='app__flex btn__search'><BsSearch onClick={props.handleSearch}/></button>
    </div>
  )
}
