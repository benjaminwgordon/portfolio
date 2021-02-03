import React from 'react'
import Container from 'react-bootstrap/Container'
import linkedinIcon from '../Media/Social/027-linkedin-white.svg'
import githubIcon from '../Media/Developer/010-github-white.svg'
import resumeIcon from '../Media/Social/resume-and-cv-white.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Container>
                <ul className="social-icons">
                    <li className="social-icon">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/benjaminwgordon/"><img src={linkedinIcon} alt="LinkedIn" className="icon-xs" /></a>
                    </li>
                    <li className="social-icon">
                        <a target="_blank" rel="noreferrer" href="https://github.com/benjaminwgordon"><img src={githubIcon} alt="Github" className="icon-xs"/></a>
                    </li>
                    <li className="social-icon">
                        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vTa35ZeQ5VEpIyif1trtNNHU8YNr-FA-A2h73fYMHQCD8BV_DylHJeLphuuyqTNs_Bt09-iPZDZlv4w/pub"><img src={resumeIcon} alt="Resume" className="icon-xs"/></a>
                    </li>
                    <li className="social-icon"></li>
                </ul>
                <p>benjaminwillardgordon@gmail.com © Benjamin Gordon. All Rights Reserved.</p>
            </Container>
        </div>
    )
}

export default Footer
