import React from 'react'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import './footer.css'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Nilesh</a>
      <ul className='permalinks'>
        <li> <a href='#'> Home </a> </li>
        <li> <a href='#about'> About </a> </li>
        <li> <a href='#experience'> Experience </a> </li>
        <li> <a href='#services'> Services </a> </li>
        <li> <a href='#portfolio'> Portfolio </a> </li>
        <li> <a href='#contact'> Contact </a> </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Nilesh. All rights researved.</small>
      </div>
    </footer>
  )
}

export default Footer