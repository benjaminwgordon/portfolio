import React from 'react'
import Job from '../Job/Job'
import gmw from '../Media/GMW.svg'
import UALogo from '../Media/UA.svg'
import GALogo from '../Media/GALogo.svg'

import './WorkHistory.scss'

const WorkHistory = () => {

    class JobHistory{
        constructor(company, jobTitle, startDate, endDate, location, text, logo){
            this.company = company
            this.jobTitle = jobTitle
            this.startDate = startDate
            this.endDate = endDate
            this.location = location
            this.text = text
            this.logo = logo
        }
    }

    const GordonMachineWorks = new JobHistory(
        "Gordon Machine Works", 
        "CNC Programmer Intern", 
        "May 2018", 
        "Aug 2018", 
        "Glenview, IL", 
        "Hired as a summer intern to assist in computer automation of high precision machined goods.  I developed metaprogramming scripts for automating production of G-Code machine language, which allowed previously impossible tool path automation.",
        gmw
    )

    const GordonMachineWorks2 = new JobHistory(
        "Gordon Machine Works", 
        "CNC Programmer Intern", 
        "May 2019", 
        "Aug 2019", 
        "Glenview, IL", 
        "Returned to Gordon Machine Works for a second summer internship, with an additional focus on business development.  Continued developing metaprogramming scripts, including a tool for translating ascii text into G-Code tool paths for radial engraving.",
        gmw
    )

    const UAMWC = new JobHistory(
        "University of Arizona MWC", 
        "Research Assistant", 
        "Jul 2018", 
        "Nov 2018", 
        "Tucson, AZ", 
        "Hired as a student research assistant to develop automation scripts for repetetive manufacturing processes, including software used in the manufacturing of components for the Large Hadron Collider at CERN.",
        UALogo
    )

    const TOP = new JobHistory(
        "The Odin Project", 
        "Student / Mentor", 
        "Mar 2019", 
        "Aug 2019", 
        "Remote", 
        "After graduating, I decided to sharpen my web development skills by completing an open-source web development bootcamp.  I enjoyed the community learning aspect, so I continued my involvement through contributions to the open-source curriculum and offering weekly mentor hours to students.",
        "https://www.theodinproject.com/assets/odin-logo-2d729f16279e9fc3b58ce847eacf07f883bdfc95eb23bb5064ed59d36ef551d6.svg"
    )

    const GA = new JobHistory(
        "General Assembly", 
        "Engineering Fellow", 
        "Aug 2020", 
        "Nov 2020", 
        "Remote", 
        "After completing The Odin Project's curriculum, I was hungry for more community learning, so I enrolled in General Assembly's 3 month Software Engineering Immersive.  I knew I had strong Computer Science fundamentals, but I wanted more Web Development knowledge.  During this course, I taught data structures and algorithms lessons to my classmates to help them prepare for interviews.",
        GALogo
    )

    const UA = new JobHistory(
        "University of Arizona",
        "Student",
        "Aug 2017", 
        "Dec 2020", 
        "Remote", 
        "B.S. Information Science and Technology & Computer Science Minor",
        UALogo
    )

    const workHistory = [UA, GordonMachineWorks, UAMWC, GordonMachineWorks2, TOP, GA]
    const workHistoryRender = workHistory.map(jobHistory => {
        return <Job jobHistory={jobHistory} className="jobHistory" key={jobHistory.startDate}/>
    })

    return (
        <section className="work-history-wrapper" id="experience">
            <h4 className="work-history-header">Experience</h4>
            <div className="work-history">
                {workHistoryRender}
            </div>
        </section>
    )
}

export default WorkHistory
