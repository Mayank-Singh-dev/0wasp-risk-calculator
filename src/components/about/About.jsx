import React from 'react'
import './About.css'
import OWSASPLOGO from '../OWASP.png'

const About = () => {
  return (
    <section id='About'>
      <div className="heading">
      <h2>About OWASP Risk Calculator</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={OWSASPLOGO} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <p>
              The Open Web Application Security Project (OWASP) is a non-profit organization dedicated to improving software security. The OWASP Foundation was established in 2001 to provide an open platform for software security professionals to share knowledge and best practices. The OWASP Risk Calculator is an online tool designed to assist businesses in identifying and assessing potential risks associated with their web applications.The calculator provides a structured approach to evaluating risks based on the severity of the threat, the likelihood of an attack, and the potential impact on the business.
            </p>   
            <p>
            The tool takes into account a wide range of factors such as data about Threat agent, Vulnerability Factor, Technical and Buisness Impact. By analyzing these factors, the calculator generates a risk score that enables businesses to prioritize their security efforts and allocate resources effectively.
            </p>
            <p>
            Using the OWASP Risk Calculator can help businesses to identify and address potential security vulnerabilities before they are exploited by malicious actors. It can also help organizations to comply with regulatory requirements and protect their reputation by demonstrating a commitment to security best practices. Ultimately, the tool can help businesses to enhance their overall security posture and reduce the risk of costly data breaches or other security incidents.
            </p>
            </article>
          </div>
          
        </div>
        </div>

        
    </section>
  )
}

export default About