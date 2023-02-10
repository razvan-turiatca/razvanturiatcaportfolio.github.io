import React from 'react'
import { RiContactsFill } from 'react-icons/ri'
import PageHeaderContent from '../../components/pageHeaderContent'

import './contact.scss'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />

      <div className="contact--content">
        <h3 className="contact--content--header-text">Let's Talk</h3>
        <div className="contact--content--form">
          <div className="contact--content--form--controls-wrapper">
            <div className="name-wrapper">
              <input type="text" name="name" className="input input-name" />
              <label htmlFor="name" className="label name-label">
                Name
              </label>
            </div>
            <div className="email-wrapper">
              <input type="text" name="email" className="input input-email" />
              <label htmlFor="email" className="label email-label">
                Email
              </label>
            </div>
            <div className="description-wrapper">
              <textarea
                type="text"
                name="description"
                id=""
                cols="30"
                rows="10"
                style={{ resize: 'none' }}
                className="input input-description"
              />
              <label htmlFor="description" className="label description-label">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
