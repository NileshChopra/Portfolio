import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import './services.css'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>User Research</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Accessibility design</p>
            </li>
            {/* <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Collaboration</p>
            </li> */}
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>WebDevelopment</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Front-end development</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Back-end development</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Responsive design</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>Web application development</p>
            </li>
          </ul>
        </article>


        {/* <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>random text here</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>random text here</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>random text here</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>random text here</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service_list-icon'/>
              <p>random text here</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services