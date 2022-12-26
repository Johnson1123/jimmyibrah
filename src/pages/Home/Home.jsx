import React from 'react'
import Features from '../../component/Features/Features'
import Popular from '../../component/Popular/Popular'
import Slide from '../../component/Slideshow/Slide'
import Location from '../../component/Location/Location'
import './Home.scss'
import HomeContact from '../../component/HomeContact/HomeContact'

export default function Home() {
  return (
    <div className='container home__con app__columns'>
      <Slide />
      <Features />
      <Location />
      <Popular />
      <HomeContact />
    </div>
  )
}
