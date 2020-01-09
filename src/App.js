import React from 'react';
import face from './face.png';
import resume from './Resume.pdf'
import githubicon from './github-icon.png'
import linkedinicon from './linkedin-icon.png'
import './App.css';

function Webpage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={face} className="App-logo" alt="logo" />
        <p>
          Daniel Li (WIP)
        </p>
      </header>
      <body className="App-body">
        <a
          className="App-link"
          href="https://github.com/danielsqli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubicon} scale="0.2"/>
        </a>
        <a
        className="App-link"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/daniel-li-8ba675161/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinicon} scale="0.2"/>
        </a>
      </body>
    </div>
  );

}

export default Webpage;
