import React from 'react'
import './Badge.scss'

import profileImage from './me.png'
import linkedinIcon from '../Media/Social/027-linkedin.svg'
import githubIcon from '../Media/Developer/010-github.svg'
import resumeIcon from '../Media/Social/resume-and-cv.svg'

const Badge = () => {
    return (
        <div className="badge">
            <div className="rounded-image-container">
                <img src={profileImage} alt="Ben Gordon"/>
            </div>
            <h3 className="name">Ben Gordon</h3>
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
        </div>
    )
}

export default Badge