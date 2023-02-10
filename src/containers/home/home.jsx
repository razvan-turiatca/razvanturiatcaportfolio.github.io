import React from 'react'
import { Animate } from 'react-simple-animate'
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'
import './home.scss'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home--text-wrapper">
        <h1>
          Hello, I'm Razvan
          <br />A Front-End Developer
        </h1>
      </div>
      <Animate
        play={true}
        duration={1.5}
        delay={1}
        start={{ transform: 'translateY(600px)' }}
        end={{ transform: 'translateY(0px)' }}
      >
        <div className="contact-me">
          <div className="contact-me--buttons-wrapper">
            <button>Hire Me</button>
            <a href="#">Download Resume</a>
          </div>
          <div className="contact-me--socials-wrapper">
            <FaLinkedin size={32} />
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
            <FaGithub size={32} />
          </div>
        </div>
      </Animate>
    </section>
  )
}

export default Home
