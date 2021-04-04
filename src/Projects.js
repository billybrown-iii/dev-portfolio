import React from "react"
import budget from './budget.png'

function Projects(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Projects</div>
                    <a className="project-link" href="https://flamboyant-sammet-9818c7.netlify.app/" target="_blank">
                        <div className="project">
                            <div className="project-description">
                                Lightweight Budget Planner
                                <div className="project-subtitle">Monthly budget visualizer</div>
                            </div>
                            <img className="project-image" src={budget}></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;