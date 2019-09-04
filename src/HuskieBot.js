import React, { Component } from 'react';
import './HuskieBot.css';
import logo from '../src/assets/logo.svg';
import { huskisms } from '../src/assets/huskisms';

class HuskieBot extends Component {	
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>HuskieBot v2</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {huskisms.exclamations[Math.floor(Math.random() * huskisms.exclamations.length)]}
        </p>
        <a
          className="App-link"
          href="."
          rel="noopener noreferrer"
        >
          I'd have that again! (Reload)
        </a>
      </header>
    </div>
    )
  }
}

export { HuskieBot };
