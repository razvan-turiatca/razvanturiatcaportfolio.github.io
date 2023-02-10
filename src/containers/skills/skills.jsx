import React from 'react'
import { GiSkills } from 'react-icons/gi'
import { Animate, AnimateKeyframes } from 'react-simple-animate'

import PageHeaderContent from '../../components/pageHeaderContent'
import { skillsData } from './utils'
import { Line } from 'rc-progress'

import './skills.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My skills" icon={<GiSkills size={40} />} />
      <div className="skills--content-wrapper">
        {skillsData.map((item, idx) => {
          const { label, data } = item
          return (
            <div key={idx} className="skills--content-wrapper--inner-content">
              <Animate
                play
                duration={1}
                delay={0.4}
                start={{
                  transform: 'translateX(-250px)',
                }}
                end={{
                  transform: 'translateX(0)',
                }}
              >
                <h3 className="skills--content-wrapper--inner-content--category-text">
                  {label}
                </h3>
                <div>
                  {data.map((skill, idx) => {
                    const { skillName, percentage } = skill
                    return (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={['opacity: 1', 'opacity:0']}
                        iterationCount="1"
                      >
                        <div className="progressbar-wrapper" key={idx}>
                          <p>{skillName}</p>
                          <Line
                            percent={percentage}
                            strokewidth="2"
                            strokeColor="var(--selected-theme-main-color)"
                            strokeLinecap="square"
                            trailWidth="2"
                          />
                        </div>
                      </AnimateKeyframes>
                    )
                  })}
                </div>
              </Animate>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
