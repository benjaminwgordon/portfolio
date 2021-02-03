import React from 'react'

import './TechBadge.scss'


const TechBadge = (props) => {
    return (
        <div className="techbadge">
            <img src={props.icon} alt={props.icon.toString().split("/").reverse()[0].replace(".svg", "")} id={props.name} className="icon-md" />
            <label for={props.name}>{props.name}</label>
        </div>
    )
}

export default TechBadge
