import React, { useEffect, useState } from 'react'
import setTheme from '../../utilities/theme'
import { ImCog } from 'react-icons/im'

import './theme.scss'

const colorsArray = [
  { id: 'yellow', bgColor: '#fab005' },
  { id: 'red', bgColor: '#a61e4d' },
  { id: 'green', bgColor: '#20c997' },
  { id: 'blue', bgColor: '#22b8cf' },
]

const Theme = () => {
  const [theme, setCurrentTheme] = useState('yellow')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setTheme(theme)
  }, [])

  const handleToggleTheme = (id) => {
    setTheme(id)
    setToggle(false)
  }
  // setTheme(theme)

  return (
    <div className={` theme-wrapper ${toggle ? 'active' : ''}`}>
      <div className="theme-wrapper--toggle-icon">
        <ImCog size={40} onClick={() => setToggle(!toggle)} />
      </div>
      <div className="theme-wrapper--menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, index) => {
            return (
              <li
                key={index}
                style={{ background: item.bgColor }}
                onClick={() => handleToggleTheme(item.id)}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Theme
