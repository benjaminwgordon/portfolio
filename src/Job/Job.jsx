import React from "react";

import "./Job.scss";

const Job = (props) => {
  const { company, jobTitle, startDate, endDate, location, bullets, logo } =
    props.jobHistory;
  const renderedBullets = bullets.map((bullet) => (
    <li className="job-bullet">{bullet}</li>
  ));

  return (
    <div className="job">
      <div className="job-left" xs={3}>
        <img
          src={logo}
          className="job-logo icon-md"
          alt={company + " " + logo}
        />
      </div>
      <div className="job-right">
        <p>
          <span className="font-weight-bold">{company}, </span>
          <span>{jobTitle}</span>
        </p>
        <span>
          {startDate} - {endDate}
        </span>
        <p>{location}</p>
        <ul>{renderedBullets}</ul>
      </div>
    </div>
  );
};

export default Job;
