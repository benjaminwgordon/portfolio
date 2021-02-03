import React from 'react'
import './Skills.scss'

import TechBadge from '../TechBadge/TechBadge'

import dockerIcon from '../Media/Developer/004-docker.svg'
import reactIcon from '../Media/Developer/006-react.svg'
import pythonIcon from '../Media/Developer/005-python.svg'
import javascriptIcon from '../Media/Developer/javascript.svg'
import cssIcon from '../Media/Developer/css3.svg'
import nodeJSIcon from'../Media/Developer/032-nodejs.svg'
import postgreSQL from '../Media/Developer/PostgreSQL.svg'
import herokuIcon from '../Media/Developer/heroku-logo-solid-purple.svg'
import htmlIcon from '../Media/Developer/HTML.svg'

class Skill{
    constructor(name, icon){
        this.name = name
        this.icon = icon
    }
}

const skills = [
    new Skill("JavaScript", javascriptIcon),
    new Skill("CSS", cssIcon),
    new Skill("React.js", reactIcon),
    new Skill("Node.js", nodeJSIcon),
    new Skill("Python", pythonIcon),
    new Skill("Docker", dockerIcon),
    new Skill("PostgreSQL", postgreSQL),
    new Skill("Heroku", herokuIcon),
    new Skill("HTML 5", htmlIcon)
]
const skillBadges = skills.map(skill => {
    return <TechBadge icon={skill.icon} name={skill.name}/>
})

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h4>Skills</h4>
            <div className="skill-icons">
                {skillBadges}
            </div>
        </div>
    )
}

export default Skills
