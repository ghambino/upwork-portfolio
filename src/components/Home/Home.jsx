import React from 'react';
import myImage from '../../images/abbas-dev.png'
import './home.css'

function Home() {
  return (
      <div className='intro-box'>
          <div className="left-info">
            <p className='work'>Design {">>"} Build {">>>>"} Improve</p>
            <h1 className='intro-word'>I create beautiful websites your users will love</h1>
            <button className='intro-contact'>Discuss with expert</button>
          </div>
          <div className="right-img">
            <img src={myImage} alt="abdulwahab abbas" className='intro-image'/>
          </div>
      </div>
  )
}

export default Home;
