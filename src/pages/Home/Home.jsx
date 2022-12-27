import React from 'react'
import Features from '../../component/Features/Features'
import Popular from '../../component/Popular/Popular'
import Slide from '../../component/Slideshow/Slide'
import Speech from '../../component/Location/Speech'
import './Home.scss'
import HomeContact from '../../component/HomeContact/HomeContact'

export default function Home() {
  return (
    <div className='container home__con app__columns'>
      <Slide />
      <Features />
      <Popular />
      <Speech />
      <HomeContact />
    </div>
  )
}
