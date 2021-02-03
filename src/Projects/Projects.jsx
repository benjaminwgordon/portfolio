import React from 'react'

import './Project.scss'

import streamSyncHome from './media/stream-sync-home.png'


const Projects = () => {

    class Project{
        constructor(name, technologies, image, repository, url){
            this.name = name
            this.technologies = technologies
            this.image = image
            this.repository = repository
            this.url = url
        }
    }

    const streamSync = new Project(
        "streamSync",
        [
            "Socket.io", "Node.js", "Express"
        ],
        streamSyncHome,
        'https://github.com/benjaminwgordon/Youtube-Stream-Share',
        'https://youtube-stream-share.herokuapp.com/',
    )

    const wayfarer = new Project(
        "Wayfarer",
        [
            "Python", "Django", "PostgreSQL"
        ],
        null,
        'https://wayfarer-group.herokuapp.com/',
        'https://github.com/benjaminwgordon/Wayfarer',   
    )

    const shareAGraph = new Project(
        "Share-a-Graph",
        [
            "Node.js", "Express"
        ],
        null,
        'https://github.com/benjaminwgordon/share-a-graph',
        'https://share-a-graph.herokuapp.com/',
    )

    const 

    return (
        <div>
            
        </div>
    )
}

export default Projects
