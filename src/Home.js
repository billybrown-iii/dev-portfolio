import React from "react";
import mongoDB from './mongodb.png';
import expressIcon from './express.png';

function Home(props) {
    return (
        <div>
            <div className="card">
                <div>
                    <div className="card-title" id="about-title">About</div>
                    <div className="content">Hey, I'm Billy. &nbsp;I'm a web developer, and I enjoy building web apps with JavaScript and React.  This is my portfolio website, where I showcase some of my projects and certifications.</div>
                    <div className="content">I'm currently employed as a Rule Developer at Transcepta LLC. &nbsp;This is a junior-level position that involves some programming tasks. &nbsp;The main technologies we use are vbScript, Regular Expressions, SQL, and version control.</div>
                    <div className="content">I hope to build up my skills in modern frameworks to the point of becoming a full-time Web Developer / Software Engineer. &nbsp;Thank you for checking out my portfolio!</div>
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