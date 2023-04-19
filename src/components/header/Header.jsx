import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'
import CV from '../../assets/cv.pdf'
import ME from '../../assets/me.png'
import React from 'react'
import './header.css'
import '../../../src/index.css'


function Header() {
  return (
    <header id='home'>
      <div className="container header_container">
        
        <h5>Hello I'm</h5>
        <h1>Nilesh Chopra</h1>
        <h5 className="text-light">FullStack Developer</h5>
  
        {/* CTA */}
        <div className='cta'>
          <a href={CV} className='btn' target='_blank'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>


        {/* Header Socials */}
        <div className='header_socials'>
          <a href='https://www.linkedin.com/in/nileshchopra/' target='_blank'><BsLinkedin /></a>
          <a href='https://github.com/NileshChopra' target='_blank'><BsGithub /></a>
          <a href='https://dribbble.com/NileshChopra' target='_blank'><BsDribbble /></a>
        </div>


        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      
      </div>
    </header>
  )
}

export default Header