import React from "react"

function Home(props) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="card-title" id="about-title">About</div>
                    <div className="content">I'm a web developer who started programming by writing scripts in AutoHotKey to automate portions of my office work.  I soon became addicted to thinking through problems and building solutions with code.</div>
                    <div className="content">Today, my primary focus is on clean layouts that provide a graceful and effortless user experience.  I am excited to continue building out my portfolio and begin seeking a full-time developer position.</div>
                    <hr />
                    <div className="card-title" id="certs-title">Certifications & Learning Modules</div>
                    <div className="content">Here are the notable certifications I've earned and curricula I've gone through.</div>
                    <div className="cert cert-title">
                        <a className="hidden-link" href="http://www.freecodecamp.org" target="_blank">freeCodeCamp:</a>
                    </div>
                    <div className="cert">
                        <a href="https://www.freecodecamp.org/certification/fcc13351cc5-efa2-42ff-b625-09f907aa61fb/responsive-web-design" target="_blank">Responsive Web Design</a>
                    </div>
                    <div className="cert">
                    <a href="https://www.freecodecamp.org/certification/fcc13351cc5-efa2-42ff-b625-09f907aa61fb/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</a>
                    </div>
                    <div className="cert cert-title">
                        <a href="http://www.udemy.com" target="_blank">Udemy:</a>
                    </div>
                    <div className="cert">
                        <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank">The Web Developer Bootcamp</a>
                    </div>
                    <div className="cert cert-title">
                        <a href="https://csx.codesmith.io/home" target="_blank">CSX:</a>
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
                </div>
            </div>
        </div>
    )
}

export default Home;