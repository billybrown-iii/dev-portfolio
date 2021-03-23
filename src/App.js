import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';
import Connect from './Connect.js';





function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="title">Billy Brown III</div>
        <div className="subtitle">a web developer based in the Pacific Northwest</div>
      </div>

      <div className="nav">
          <Link to="/" className="nav-item">About</Link>
          <span className="nav-border" />
          <Link to="/projects" className="nav-item">Projects</Link>
          <span className="nav-border" />
          <Link to="/connect" className="nav-item">Connect</Link>
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
