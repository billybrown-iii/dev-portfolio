import React from "react"
import budget from './budget.png'

function Projects(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Projects</div>
                    <a rel="noreferrer" className="project-link" href="https://personalbudget.netlify.app/" target="_blank">
                        <div className="project">
                            <div className="project-description">
                                Monthly Budget Creator
                                <div className="project-subtitle">Budget planner / creation tool</div>
                            </div>
                            <img className="project-image" src={budget} alt="Budget app preview"></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;