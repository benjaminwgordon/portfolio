import React from "react";
import "./Skills.scss";

import TechBadge from "../TechBadge/TechBadge";

import dockerIcon from "../Media/Developer/004-docker.svg";
import reactIcon from "../Media/Developer/006-react.svg";
import pythonIcon from "../Media/Developer/005-python.svg";
import javascriptIcon from "../Media/Developer/javascript.svg";
import cssIcon from "../Media/Developer/css3.svg";
import nodeJSIcon from "../Media/Developer/032-nodejs.svg";
import postgreSQL from "../Media/Developer/PostgreSQL.svg";
import htmlIcon from "../Media/Developer/HTML.svg";
import djangoIcon from "../Media/Developer/django.svg";
import socketIOIcon from "../Media/Developer/socket-io.svg";
import expressIcon from "../Media/Developer/express-js.svg";

class Skill {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}

const skills = [
  new Skill("JavaScript", javascriptIcon),
  new Skill("HTML 5", htmlIcon),
  new Skill("CSS", cssIcon),
  new Skill("Node.js", nodeJSIcon),
  new Skill("Express", expressIcon),
  new Skill("React.js", reactIcon),
  new Skill("Python", pythonIcon),
  new Skill("Django", djangoIcon),
  new Skill("PostgreSQL", postgreSQL),
  new Skill("Docker", dockerIcon),
  new Skill("SocketIO", socketIOIcon),
];
const skillBadges = skills.map((skill) => {
  return (
    <TechBadge
      icon={skill.icon}
      name={skill.name}
      key={"techbadge: " + skill.name}
    />
  );
});

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h4>Skills</h4>
      <div className="skill-icons">{skillBadges}</div>
    </div>
  );
};

export default Skills;
