'use client';

import heroImg from "../media/heroB.jpg";
import { IoIosFitness } from "react-icons/io";


const HeroSection = ({handleCTA}) => {

  return (
    <main className="hero-section">
      {/* <img src={heroImg} className='heroImg' alt="" /> */}
      <div className="hero-text">
        <p className="description-text">Start the journey</p>
        <h1 className="heading-text">hero hero hero hero{/* Ready to get buffed up? */}</h1>
        <button className="button" onClick={handleCTA}>
          <IoIosFitness className="icon"/>Become a super-human
        </button>
      </div>
      
    </main>
  )
}

export default HeroSection