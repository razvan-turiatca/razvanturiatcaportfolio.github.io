import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaReact, FaSass } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { personalData } from './utils'
import { Animate } from 'react-simple-animate'

import './about.scss'

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about--content">
        <div className="about--content-personal">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(-800px' }}
            end={{ transform: 'translateX(0px' }}
          >
            <h3 className="developer-content">Front-End Developer</h3>
            <p>
              I'm a Junior Front End Developer with 1 year of experience in
              developing innovative and interactive web applications. I have
              expertise in HTML, CSS, JavaScript, Typescript, Sass and ReactJS.
              I'm passionate about creating web applications that are intuitive,
              user-friendly, and visually appealing. I'm also highly experienced
              with various web development tools and frameworks. I'm looking to
              join a team of like-minded developers in a role that allows me to
              utilize my skills and knowledge to create impactful and effective
              web applications.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(500px' }}
            end={{ transform: 'translateX(0px' }}
          >
            <h3 className="personal-content">Personal Information</h3>
            <ul>
              {personalData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                )
              })}
            </ul>
          </Animate>
        </div>

        <div className="about--content-services">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: 'translateX(500px' }}
            end={{ transform: 'translateX(0px' }}
          >
            <div className="about--content-services-content">
              <div>
                <SiJavascript
                  size={60}
                  color="var(--selected-theme-main-color)"
                  className="about-icons"
                />
              </div>
              <div>
                <FaReact
                  size={60}
                  color="var(--selected-theme-main-color)"
                  className="about-icons"
                />
              </div>
              <div>
                <SiTypescript
                  size={60}
                  color="var(--selected-theme-main-color)"
                  className="about-icons"
                />
              </div>
              <div>
                <FaSass
                  size={60}
                  color="var(--selected-theme-main-color)"
                  className="about-icons"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About
