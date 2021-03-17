import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';
import Connect from './Connect.js';





function App() {
  return (
    <BrowserRouter>
      <div className="header">

        <h2 className="title">Billy Brown III</h2>
        <div className="subtitle">- a web developer based in the Pacific Northwest</div>

        <div className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/connect" className="nav-item">Connect</Link>
        </div>

      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/connect" component={Connect} />
      </div>
    </BrowserRouter>
  );
}

export default App;
