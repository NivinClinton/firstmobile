import React from 'react'
import './Welcome.css'
import banner from '../../assets/banner.webp'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <div className="WelcomePage">
          <div className="Container">
            <div className="banner ">
              <img src={banner} alt="" />
              <div className="banner-cont">
                <div className="b-cont1">
                  <h1>Welcome</h1>
                  <p>
                    Yeah you are at the right place... We are here to make you laugh
                  </p>
                </div>
                <div className="bann-btn">     
                  <button type="button" className="btn1" onClick={()=>navigate('/jokes')}>
                    Click to continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Welcome