import React from "react";
import Job from "../Job/Job";
import UALogo from "../Media/UA.svg";
import GALogo from "../Media/GALogo.svg";
import SourcegraphLogo from "../Media/Sourcegraph.svg";

import "./WorkHistory.scss";

const WorkHistory = () => {
  class JobHistory {
    constructor(
      company,
      jobTitle,
      startDate,
      endDate,
      location,
      bullets,
      logo
    ) {
      this.company = company;
      this.jobTitle = jobTitle;
      this.startDate = startDate;
      this.endDate = endDate;
      this.location = location;
      this.bullets = bullets;
      this.logo = logo;
    }
  }

  // const GordonMachineWorks = new JobHistory(
  //   "Gordon Machine Works",
  //   "CNC Programmer Intern",
  //   "May 2018",
  //   "Aug 2018",
  //   "Glenview, IL",
  //   ["", "", "", "", ""],
  //   gmw
  // );

  const UAMWC = new JobHistory(
    "University of Arizona MWC",
    "Research Assistant",
    "Jul 2018",
    "Nov 2018",
    "Tucson, AZ",
    [
      "Designed and developed Python software improving manufacturing processes to be used in manufacture of components for the Large Hadron Collider at CERN",
      "Developed software estimated to cut 1/3rd of total manufacturing time",
      "Built machine tool integration scripts scaled to produce 10,000+ parts as specified by vendor",
      "Automated a formerly hands-on inspection process, reducing rejection rate by 10+%",
    ],
    UALogo
  );

  const GA = new JobHistory(
    "General Assembly",
    "Engineering Fellow",
    "Aug 2020",
    "Nov 2020",
    "Remote",
    [
      "Completed 12 week Full-Stack Software Engineering Immersive with a 100% success rate of projects and assignments",
      "Organized and instructed a student-lead after-hours Data Structures and Algorithms class",
    ],
    GALogo
  );

  const GAInstructor = new JobHistory(
    "General Assembly",
    "Software Engineering Bootcamp Instructor",
    "Aug 2020",
    "Nov 2020",
    "Remote",
    [
      "Instructed workshops on Full-Stack Software Engineering",
      "Developed lecture and lab materials to meet curriculum requirements",
    ],
    GALogo
  );

  const UA = new JobHistory(
    "University of Arizona",
    "Student",
    "Aug 2017",
    "Dec 2020",
    "Remote",
    ["B.S. Information Science and Technology", "Computer Science Minor"],
    UALogo
  );

  const sourcegraph = new JobHistory(
    "Sourcegraph",
    "Application Engineer",
    "Aug 2020",
    "Nov 2020",
    "Remote",
    [
      "Debugs deployments of a containerized, distributed application deployed through Docker-Compose or Kubernetes",
      "Facilitates asynchronous and synchronous debugging conversations with product users and administrators",
      "Writes deployment automation scripts to resolve customer-specific technical blockers",
      "Writes technical documentation for both product users and administrators",
    ],
    SourcegraphLogo
  );

  const workHistory = [UA, UAMWC, GA, GAInstructor, sourcegraph];
  const workHistoryRender = workHistory.map((jobHistory) => {
    return (
      <Job
        jobHistory={jobHistory}
        className="jobHistory"
        key={jobHistory.startDate}
      />
    );
  });

  return (
    <section className="work-history-wrapper" id="experience">
      <h4 className="work-history-header">Experience</h4>
      <div className="work-history">{workHistoryRender}</div>
    </section>
  );
};

export default WorkHistory;
