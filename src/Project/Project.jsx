import React from 'react'

import './Project.scss'

const Project = (props) => {

    const {name, technologies, repository, description} = props.project

    const techMap = technologies.map(technology => {
        return <img key={'technology: ' + technology.toString()} className="project-technology icon-sm" src={technology} alt={"Web Dev Tech Icon"}/>
    })

    return (
        <a href={repository} rel="noreferrer" target="_blank"><div className="project">
            <div className="project-left">
                <h4>{name}</h4>
                <p className="project-description">{description}</p>  
            </div>
            <div className="project-right project-technologies">
                {techMap}
            </div>            
        </div></a>
    )
}

export default Project
