import React from 'react'

import MyNav from './MyNav/MyNav'
import About from './About/About'
import Skills from './Skills/Skills'
import WorkHistory from './WorkHistory/WorkHistory'
import Container from 'react-bootstrap/Container'

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
          </Container>
      </div>
    </div>
  )
}

export default App

