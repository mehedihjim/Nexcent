import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
        <div className="container">
            <div className="banner-wrapper">
            <div className="banner-left">
                <h1>Lessons and insights <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <a href="#" className="common-btn">Register</a>
            </div>
            <div className="banner-right">
                <img src="./Banner.png" alt="" />
            </div>
            </div>
            <div className="slide-dot">
                <img src="./Dot.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner