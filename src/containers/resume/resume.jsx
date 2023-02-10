import React from 'react'
import { FaBlackTie } from 'react-icons/fa'
import { TbCode } from 'react-icons/tb'
import { GiGraduateCap } from 'react-icons/gi'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import PageHeaderContent from '../../components/pageHeaderContent'

import { data } from './utils'
import './resume.scss'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline--experience">
          <h3 className="timeline--education--header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color"
          >
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline--education--vertical-timeline-component"
                contentStyle={{
                  background: 'none',
                  color: 'var(--selected-theme-main-color)',
                  border: '1.5px solid var(--selected-theme-main-color) ',
                }}
                date={item.date}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--selected-theme-main-color',
                }}
                icon={<GiGraduateCap />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.school}</h4>
                </div>
                <p className="vertical-timeline-element-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume
