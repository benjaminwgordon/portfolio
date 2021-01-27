import React from 'react'
import Container from 'react-bootstrap/Container'

const About = () => {
    return (
        <Container className="section about-me">
            <h2 className="hero-text">
                My name is Ben, I'm a software engineer
            </h2>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="14dd8628-0ff7-467c-b494-c74c8e3f681f" data-share-badge-host="https://www.youracclaim.com"></div>
            <script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
        </Container>
    )
}

export default About
