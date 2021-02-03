import React from 'react'

import MyNav from './MyNav/MyNav'
import About from './About/About'
import Skills from './Skills/Skills'
import WorkHistory from './WorkHistory/WorkHistory'
import Container from 'react-bootstrap/Container'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'
import './App.scss';

const App = () => {
  return (
    <div className="background">
      <MyNav />
      <div className="content">
        <Container>
            <About />
            <Skills />
            <WorkHistory />
            <Projects />
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default App

