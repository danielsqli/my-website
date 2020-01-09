import React from 'react';
import logo from './logo.svg';
import { Page, Document } from '@react-pdf/renderer';
import resume from './Resume.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Daniel Li
        </p>
        <a
          className="App-link"
          href="https://github.com/danielsqli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
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
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
