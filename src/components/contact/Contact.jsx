import './contact.css'
import React, {useRef} from 'react'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolioWebsite', 'template_uy689eh', form.current, 'n5kKsU3ofKWU8DoaA')
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">

        <div className="contact_options">

          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Someone@gmail.com</h5>
            <a href="mailto:someone@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option' target='_blank'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>NileshChopra</h5>
            <a href="https://m.me/profile">Send a message</a>
          </article>

          <article className='contact_option' target='_blank'>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+0996347643</h5>
            <a href="https://api+whatsapp.com/send?phone++9173767363">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='YourFullName' required    />
          <input type="email" name="email" placeholder='YourEmail' required />
          <textarea name="message" rows="7" placeholder='YourMessage' required></textarea>
          <button type='submit' className='btn btn-primary'    > Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact