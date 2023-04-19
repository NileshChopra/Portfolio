import React from 'react'
import './experience.css'
import { BsCheckCircleFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience_container">

        <div className="experience_frontend">

          <h3>FrontEnd Development</h3>

          <div className="experience_content">

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience_backend">

          <h3>Backend Development</h3>

          <div className="experience_content">

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsCheckCircleFill className='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>

    </section >
  )
}

export default Experience