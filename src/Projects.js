// @ts-nocheck
import React from "react"
import budget from './bin/budget.png'
import quote from './bin/quote.png'
import clock from './bin/clock.png'
import calc from './bin/calc.png'

function Projects(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Original Projects</div>

                    <a className="project-link" href="https://monthlybudget.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/billybrown-iii/budget-react-app" target="_blank" rel="noreferrer">
                                <i className="fab fa-github-alt"></i>
                                <div className="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                Budget Snapshot Tool
                                <div className="project-subtitle">Create Monthly Budgets in Seconds</div>
                            </div>
                            <img className="project-image" src={budget} alt="Budget app preview"></img>
                        </div>
                    </a>

                    <div className="card-title">Curriculum Projects</div>

                    <a className="project-link" href="https://random-quotation.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/billybrown-iii/random-quote" target="_blank" rel="noreferrer">
                                <i className="fab fa-github-alt"></i>
                                <div className="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                Random Quote Generator
                                <div className="project-subtitle">Displays random quotes from a Web API</div>
                            </div>
                            <img className="project-image" src={quote} alt="Quote app preview"></img>
                        </div>
                    </a>

                    <a className="project-link" href="https://billybrown-iii.github.io/javascript-calculator/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/billybrown-iii/javascript-calculator" target="_blank" rel="noreferrer">
                                <i className="fab fa-github-alt"></i>
                                <div className="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                JavaScript Calculator
                                <div className="project-subtitle">Built with React Hooks</div>
                            </div>
                            <img className="project-image" src={calc} alt="Calculator app preview"></img>
                        </div>
                    </a>

                    <a className="project-link" href="https://billybrown-iii.github.io/pomodoro-clock/" target="_blank" rel="noreferrer">
                        <div className="project">
                            <a className="github-link" href="https://github.com/Billybrown-iii/pomodoro-clock" target="_blank" rel="noreferrer">
                                <i className="fab fa-github-alt"></i>
                                <div className="gh-label">View Code</div>
                            </a>
                            <div className="project-description">
                                Pomodoro Timer
                                <div className="project-subtitle">Built with React Hooks</div>
                            </div>
                            <img className="project-image" src={clock} alt="Pomodoro timer preview"></img>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Projects;