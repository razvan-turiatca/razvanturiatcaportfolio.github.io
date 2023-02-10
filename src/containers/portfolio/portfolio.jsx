import React, { useState } from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { AiFillProject } from 'react-icons/ai'
import { filterOptions, portfolioData } from './utils'

import './portfolio.scss'

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // const [portfolioOptions, setPortfolioOptions] = useState(filterOptions)

  const handleFilter = (id) => {
    setFilterValue(id)
    // if (id != 1) {
    //   const filteredData = portfolioData.filter(
    //     (option) => option.sectionId == id,
    //   )
    //   setPortfolioOptions(filteredData)
    // } else {
    //   setPortfolioOptions(portfolioData)
    // }
  }

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue)
  console.log(filterValue)
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio--content">
        <ul className="portfolio--content--filter">
          {filterOptions.map((option) => (
            <li
              key={`filter${option.id}`}
              onClick={() => handleFilter(option.id)}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio--content--cards">
          {filteredPortfolioData.map((item, i) => (
            <div
              key={i}
              className="portfolio--content--cards--item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="portfolio--content--cards--item--img-wrapper">
                <a>
                  <img src={item.image} alt="project link" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === i && (
                  <div>
                    <p>{item.project}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
