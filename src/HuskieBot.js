import React, { Component } from 'react';
import styled from '@emotion/styled';
import './HuskieBot.css';
import logo from '../src/assets/logo.svg';
import { huskisms } from '../src/assets/huskisms';

const StyledAnchor = styled('a')`
  color: hsl(193, 95%, 68%);
  margin-bottom: 16px;
`;

const StyledHeader = styled('header')`
  align-items: center;
  background-color: hsl(335, 23%, 18%);
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: space-between;
  min-height: 100vh;
`;

const StyledLogo = styled('img')`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  margin-bottom: 8px;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

class HuskieBot extends Component {	
  render() {
    return (
      <div>
        <StyledHeader>
          <h1>HuskieBot v2</h1>
          <StyledLogo src={logo} alt="logo" />
          <p>
            {huskisms.exclamations[Math.floor(Math.random() * huskisms.exclamations.length)]}
          </p>
          <StyledAnchor
            href="."
            rel="noopener noreferrer"
          >
            I'd have that again! (Reload)
          </StyledAnchor>
        </StyledHeader>
    </div>
    )
  }
}

export { HuskieBot };
