import React from 'react'
import CarousalCard from './subComponents/CarousalCard'
import Cards from './subComponents/Cards'
import Achievement from '../assets/achievement.png'
import Ad from '../assets/ad.png'

const Home = () => {
  return (
    <div>
      <CarousalCard/>
      <Cards/>
      <img src={Achievement} alt='achievements'/>
      <img src={Ad} alt='advertise'/>
    </div>
  )
}

export default Home