import React from 'react'

import './Projects.scss'

import Project from '../Project/Project'
import pythonIcon from '../Media/Developer/005-python.svg'
import nodeJSIcon from'../Media/Developer/032-nodejs.svg'
import postgreSQL from '../Media/Developer/PostgreSQL.svg'
import herokuIcon from '../Media/Developer/heroku-logo-solid-purple.svg'
import djangoIcon from '../Media/Developer/django.svg'
import socketIOIcon from '../Media/Developer/socket-io.svg'
import expressIcon from '../Media/Developer/express-js.svg'

const Projects = () => {

    class ProjectData{
        constructor(name, technologies, image, repository, url, description){
            this.name = name
            this.technologies = technologies
            this.image = image
            this.repository = repository
            this.url = url
            this.description = description
        }
    }

    const streamSync = new ProjectData(
        "StreamSync",
        [
            nodeJSIcon, socketIOIcon, herokuIcon
        ],
        null,
        'https://github.com/benjaminwgordon/Youtube-Stream-Share',
        'https://youtube-stream-share.herokuapp.com/',
        'Synchronized Youtube playback with live text chat'
    )

    const wayfarer = new ProjectData(
        "Wayfarer",
        [
            pythonIcon, djangoIcon, postgreSQL
        ],
        null,
        'https://wayfarer-group.herokuapp.com/',
        'https://github.com/benjaminwgordon/Wayfarer',
        'Travel review site for public natural spaces'
    )

    const shareAGraph = new ProjectData(
        "Share-a-Graph",
        [
            nodeJSIcon, expressIcon
        ],
        null,
        'https://github.com/benjaminwgordon/share-a-graph',
        'https://share-a-graph.herokuapp.com/',
        'Community writing platform for collaborative story telling'
    )

    const projects = [streamSync, wayfarer, shareAGraph]
    const projectRender = projects.map(project => {
        return <Project project={project} key={project.name}/>
    })

    return (
        <div className="projects">
            <h4>Projects</h4>
            <div className="project-list">
                {projectRender}
            </div>
        </div>
    )
}

export default Projects
