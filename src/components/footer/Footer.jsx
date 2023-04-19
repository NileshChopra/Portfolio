import React from 'react'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import './footer.css'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Nilesh Chopra</a>
      <ul className='permalinks'>
        <li> <a href='#'> Home </a> </li>
        <li> <a href='#about'> About </a> </li>
        <li> <a href='#experience'> Experience </a> </li>
        <li> <a href='#services'> Services </a> </li>
        <li> <a href='#portfolio'> Portfolio </a> </li>
        <li> <a href='#contact'> Contact </a> </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100010296606693"><AiOutlineFacebook/></a>
        <a href="https://www.instagram.com/ash_paper/"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Nilesh Chopra. All rights researved.</small>
      </div>
    </footer>
  )
}

export default Footer