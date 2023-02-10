import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './containers/home/home'
import About from './containers/about/about'
import Contact from './containers/contact/contact'
import Portfolio from './containers/portfolio/portfolio'
import Resume from './containers/resume/resume'
import Skills from './containers/skills/skills'
import Navbar from './components/navbar/navbar'
import Theme from './components/themes/theme'
import { particles } from './utilities/particlesConfig'

import './App.scss'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }
  const location = useLocation()
  console.log(location)

  return (
    <div className="App">
      {/* particles js */}
      {location.pathname === '/' && (
        <Particles id="particles" options={particles} init={particlesInit} />
      )}

      {/* navbar component */}
      <div className="App--navbar-wrapper">
        <Navbar />
      </div>
      {/*main page content */}
      <div className="App--main-content-wrapper">
        <Theme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
