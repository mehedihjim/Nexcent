import React from 'react'
import './Pixelgrade.css'

const Pixelgrade = () => {
  return (
    <div className="pixelgrade">
        <div className="container">
            <div className="pixel-wrapper">
                <img src="./about.png" alt="pixelgrade" />
                <div className="text-area">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <a href="#" className="common-btn">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pixelgrade