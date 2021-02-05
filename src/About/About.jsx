import React from 'react'
import Badge from '../Badge/Badge'
import './About.scss'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import awsCertBadge from '../Media/Developer/aws-certified-cloud-practitioner.png'
import gaLogo from '../Media/GALogo.svg'
import gaCert from '../Media/Certificate-of-Completion-bengordon1995@gmail.com-1605299667.pdf'
import uaLogo from '../Media/UA.svg'

const About = () => {
    return (
        <section>
            <Row className="about" id="about">
                <Col className="about-left" xs={4}>
                    <Badge />
                </Col>
                <Col className="about-right">
                    <div className="bio">
                        <p>I am a <b>Full-Stack Software Engineer</b> with a background in Manufacturing Automation, looking for Full-Stack or Back-End opportunities.</p>
                        <p>I am a recent grad of the <b>University of Arizona</b>, as well as <b>General Assembly</b>'s Software Engineering Immersive Program.</p>  
                        <p>I have combined my fascination with manufacturing heavy machinery with my interest in software, and have carved out a niche developing metaprogramming software for manufacturing businesses. I have worked for the <b>University of Arizona Machining and Welding Center</b>, as well as <b>Gordon Machine Works</b>.</p>
                        <p>When I am not writing software, you can find me cooking Sichuanese food, hoarding all the wheat in Settlers of Catan, or making premium kitchen knives at my forge.</p>
                    </div>
                    <div className="education">
                        <div className="university">
                            <h4>Education</h4>
                            <ul>
                                <li>
                                    <div className="university-card">
                                        <div className="university-card-logo">
                                            <img src={uaLogo} alt="University of Arizona" className="icon-sm"/>
                                        </div>
                                        <div className="university-card-data">
                                            <p>BS Information Science</p>
                                            <p>University of Arizona</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="certifications">
                            <h4>Certifications</h4>
                            <ul className="certification-list">
                                <a href="https://www.youracclaim.com/badges/14dd8628-0ff7-467c-b494-c74c8e3f681f/public_url" target="_blank" rel="noreferrer" ><li className="certification-card">
                                    <img src={awsCertBadge} alt="AWS Cloud Practitioner" className="icon-sm"/>
                                    <p>AWS Cloud Practitioner</p>
                                </li></a>
                                <a href={gaCert} target="_blank" rel="noreferrer"><li className="certification-card">
                                    <img src={gaLogo} alt="AWS Cloud Practitioner" className="icon-sm"/>
                                    <p>GA SEI</p>
                                </li></a>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default About
