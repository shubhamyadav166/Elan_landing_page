import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Highlights from '../pages/Highlights'
import Gallery from '../pages/Gallery'
import FloorPlan from '../pages/FloorPlan'
import Features from '../pages/Features'
import LocationAdvantage from '../pages/LocationAdvantage'
import AboutElanGroup from '../pages/AboutElanGroup'
import Navbar from '../components/Navbar'
import Questions from '../pages/Questions'
import Amenities from '../pages/Amenities'

const App = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 left-0 z-50'><Navbar /></div>
      <Home />
      <About />
      <Highlights />
      <Amenities />
      <Gallery />
      <FloorPlan />
      <Features />
      <LocationAdvantage />
      <AboutElanGroup />
      <Questions />
    </div>
  )
}

export default App
