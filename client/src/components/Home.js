import React from 'react'
import CarousalCard from './subComponents/CarousalCard'
// import Cards from './subComponents/Cards'
import Image1 from '../assets/Image1.jpg'
import Footer1 from '../assets/footer1.jpg'
import Footer2 from '../assets/footer2.webp'
import Footer3 from '../assets/footer3.jpg'
import Footer4 from '../assets/footer4.jpg'

const Home = () => {
  return (
    <div>
      <CarousalCard/>
      {/* <Cards/> */}
      <img src={Image1} alt='image1'/>
      <img src={Footer1} alt='image2'/>
    </div>
  )
}

export default Home