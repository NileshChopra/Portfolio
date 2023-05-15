import React from 'react'
import './portfolio.css'
import { data } from './PortfolioData'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">

                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" style={{ display: !demo ? "none" : "" }} >LiveDemo</a>
                </div>

              </article>
            )
          })
        }
      </div>
    </section >
  )
}
export default Portfolio;

{/* <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>

          </div>
        </article> */}