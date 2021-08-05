import React from "react";
import mongoDB from './mongodb.png';
import expressIcon from './express.png';

function Home(props) {
    return (
        <div>
            <div className="card">
                <div>
                    <div className="card-title" id="about-title">About</div>
                    <div className="content">I'm Billy, a web developer with a focus on building web apps with ReactJS.</div>
                    <div className="content">My interest in programming was sparked in 2020, when I began writing small scripts to automate and speed up repetitive tasks in my office work.  I found the problem-solving to be very rewarding, so I started diving into various learning resources in order to learn programming in greater scope.</div>
                    <div className="content">Currently, my time is spent building projects, learning more about all aspects of software development, and coming to know the Dev community.  I'm excited to continue to make progress on this never-ending pursuit of learning, with the aim of software development as a full-time profession.</div>
                    <hr />
                    <div className="card-title" id="certs-title">Certifications & Learning Modules</div>
                    <div className="content cert-desc">Here are the notable certifications I've earned and curricula I've gone through.</div>
                    <div className="cert cert-title">
                        <a rel="noreferrer" className="hidden-link" href="http://www.freecodecamp.org" target="_blank">freeCodeCamp</a>
                    </div>
                    <div className="cert">
                        <a rel="noreferrer" href="https://www.freecodecamp.org/certification/fcc13351cc5-efa2-42ff-b625-09f907aa61fb/responsive-web-design" target="_blank">Responsive Web Design</a>
                    </div>
                    <div className="cert">
                    <a rel="noreferrer" href="https://www.freecodecamp.org/certification/fcc13351cc5-efa2-42ff-b625-09f907aa61fb/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</a>
                    </div>
                    <div className="cert cert-title">
                        <a rel="noreferrer" href="http://www.udemy.com" target="_blank">Udemy</a>
                    </div>
                    <div className="cert">
                        <a rel="noreferrer" href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a>
                    </div>
                    <div className="cert cert-title">
                        <a rel="noreferrer" href="https://csx.codesmith.io/home" target="_blank">CSX</a>
                    </div>
                    <div className="cert">
                        <ul>
                            <li>Callbacks & Higher-Order Functions</li>
                            <li>Closure, Scope & Execution Context</li>
                            <li>Recursion</li>
                            <li>Object Oriented Programming</li>
                            <li>Asynchronous JavaScript</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="card-title">Technologies</div>
                    <div className="tech-container">
                    <div className="tech-desc tech-child">HTML</div>
                        <i className="fab fa-html5 tech-icon tech-child"></i>
                        <div className="tech-desc tech-child">CSS</div>
                        <i className="fab fa-css3-alt tech-icon tech-child"></i>
                        <div className="tech-desc tech-child">JavaScript</div>
                        <i className="fab fa-js-square tech-icon tech-child"></i>
                        <div className="tech-desc tech-child">Git</div>
                        <i className="fab fa-git-alt tech-icon tech-child"></i>
                        <div className="tech-desc tech-child">NodeJS</div>
                        <i className="fab fa-node-js tech-icon tech-child"></i>
                        <div className="tech-desc tech-child">ExpressJS</div>
                        <div className="tech-child">
                            <img src={expressIcon} alt="expressJS icon" className="tech-img"></img>
                        </div>
                        <div className="tech-desc tech-child">MongoDB</div>
                        <div className="tech-child">
                            <img src={mongoDB} alt="mongoDB icon" className="tech-img"></img>
                        </div>
                        <div className="tech-desc tech-child">React</div>
                        <i className="fab fa-react tech-icon tech-child" id="react-icon"></i>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;