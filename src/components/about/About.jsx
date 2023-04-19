import React from 'react'
import './about.css'
import '../../index.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt='About Image' />
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <BsAward className='about_icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            {/* <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>10+ clients worldwide</small>
            </article> */}

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>2 projets completed</small>
            </article>

          </div>

          <p> Strong in design and integration with intuitive problem solving skills. Proficient in different programming languages. Passionate about implementing and launching new projects. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
          <a href='#contact' className='btn btn-prinary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About