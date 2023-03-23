import React , {useRef} from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0ouz1u', 'template_bk444it', form.current, 'ZbtcRff6dSKUY1cQe')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto: singhmayank0908@gmail.com" target='_blank' rel="noreferrer" >Send Message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=919353457008" target='_blank' rel="noreferrer" >Send Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/singhmayank_x0" target='_blank' rel="noreferrer" >Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact