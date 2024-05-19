import React from 'react'
import './Community.css'

const Community = () => {
  return (
    <div className="community">
        <div className="cmn-title">
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="container">
        <div className="community-items">
            <div className="item-card">
                <img src="./community-1.png" alt="community" />
                <h3>Membership Organisations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="item-card">
                <img src="./community-2.png" alt="community" />
                <h3>National Associations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="item-card">
                <img src="./community-3.png" alt="community" />
                <h3>Clubs And Groups</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Community