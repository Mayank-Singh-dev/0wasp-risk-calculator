import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <NavLink exact='true' to="/" className='footer__logo'>
      OWASP RISK CALCULATOR
          </NavLink>
      <div className="footer__social">
        <a href="https://github.com/Mayank-Singh-dev" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/mayank-singh-ab2794254/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://www.instagram.com/singhmayank_x0" target="_blank" rel='noreferrer'><BsInstagram/></a>
        <a href="https://twitter.com/Mayanksingh57" target="_blank" rel='noreferrer'><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer