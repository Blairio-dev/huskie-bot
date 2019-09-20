import React, { Component } from 'react';
import styled from '@emotion/styled';
import './HuskieBot.css';
import huskieBot from '../src/assets/HuskieBot.svg';
import { huskisms } from '../src/assets/huskisms';

const StyledButton = styled('button')`
  appearance: none;
  background: hsl(240, 22%, 18%);
  border: 1px solid hsl(240, 22%, 58%);
  color: hsl(0, 0%, 100%);
  font-size: 14px;
  font-weight: bold;
  margin: 16px;
  min-width: 80px;
  padding: 16px;
`;

const StyledButtonGroup = styled('div')`
  align-items: center;
  display: flex;
  text-align: center;
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
  animation: Head-shake infinite 0.5s alternate linear;
  height: 40vmin;
  margin-bottom: 8px;
  pointer-events: none;

  @keyframes Head-shake {
    from {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(5deg);
    }
`;

function newChat(type) {
  let chat;

  chat = huskisms[type][Math.floor(Math.random() * huskisms[type].length)]

  return chat;
};

class HuskieBot extends Component {
  constructor(props) {
		super(props);

		const { chat = newChat('colloquialisms') } = props;

		this.state = {
			chat,
		};
  }
  
  render() {
    const { chat } = this.state;
    return (
      <div>
        <StyledHeader>
          <h1>HuskieBot</h1>
          <StyledLogo src={huskieBot} alt="logo" />
          <p>
            {chat}
          </p>
          <StyledButtonGroup>
            <StyledButton onClick={() => this.setState({ chat: newChat('colloquialisms') })}>
              Shite
            </StyledButton>
            <StyledButton onClick={() => this.setState({ chat: newChat('wisdom') })}>
              Wisdom
            </StyledButton>
          </StyledButtonGroup>
        </StyledHeader>
    </div>
    )
  }
}

HuskieBot.defaultProps = {
  chat: newChat('colloquialisms'),
};

export { HuskieBot };
