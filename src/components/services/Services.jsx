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
            <h3>UIUX DESIGN</h3>
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
        </article>



        <article className="service">
          <div className="service_head">
            <h3>UIUX DESIGN</h3>
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
        </article>


        <article className="service">
          <div className="service_head">
            <h3>UIUX DESIGN</h3>
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
        </article>
      </div>
    </section>
  )
}

export default Services