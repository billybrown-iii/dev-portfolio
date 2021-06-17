import React from "react"
import budget from './budget.png'
import quote from './quote.png'

function Projects(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Projects</div>

                    <a className="project-link" href="https://monthlybudget.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/BillyBDev/budget-react-app" target="_blank" rel="noreferrer">
                                <i class="fab fa-github-alt"></i>
                                <div class="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                Monthly Budget Maker
                                <div className="project-subtitle">Budget planner / creation tool</div>
                            </div>
                            <img className="project-image" src={budget} alt="Budget app preview"></img>
                        </div>
                    </a>

                    <a className="project-link" href="https://random-quotation.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/BillyBDev/random-quote" target="_blank" rel="noreferrer">
                                <i class="fab fa-github-alt"></i>
                                <div class="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                Random Quote Generator
                                <div className="project-subtitle">Displays random quotes from a Web API</div>
                            </div>
                            <img className="project-image" src={quote} alt="Quote app preview"></img>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Projects;