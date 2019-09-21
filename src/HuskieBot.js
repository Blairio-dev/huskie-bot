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
  text-align: inherit;
`;

const StyledChat = styled('p')`
  margin: 0 0 8px 0;
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

const StyledHuskie = styled('div')`
  text-align: inherit;
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

const StyledInput = styled('input')`
  border: none;
  border-radius: 24px;
  font-size: 16px;
  height: 24px;
  padding: 8px;
  text-align: inherit;
  width: -webkit-fill-available;

  :focus {
    border-radius: 24px;
  }
`;

const StyledInterations = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const StyledWrapper = styled('div')`
  text-align: center;
`;

function newChat(type) {
  let chat;

  chat = huskisms[type][Math.floor(Math.random() * huskisms[type].length)]

  return chat;
};

class HuskieBot extends Component {
  constructor(props) {
		super(props);

		const { chat = newChat('colloquialisms'), adviceIsShown = false } = props;

		this.state = {
      adviceIsShown,
			chat,
		};
  }
  
  render() {
    const { chat, adviceIsShown } = this.state;
    return (
      <StyledWrapper>
        <StyledHeader>
          <h1>HuskieBot</h1>
          <StyledHuskie>
          <StyledLogo src={huskieBot} alt="logo" />
          <StyledChat>
            {chat}
          </StyledChat>
          </StyledHuskie>
          <StyledInterations>
            <StyledButtonGroup>
            <StyledButton onClick={() => this.setState({ adviceIsShown: true, chat: newChat('questions')  })}>
                Advice
              </StyledButton>
              <StyledButton onClick={() => this.setState({ adviceIsShown: false, chat: newChat('foodPost') })}>
                Feed
              </StyledButton>
              <StyledButton onClick={() => this.setState({ adviceIsShown: false, chat: newChat('wisdom') })}>
                Wisdom
              </StyledButton>
            </StyledButtonGroup>
            { adviceIsShown && 
              <StyledInput onSubmit={() => this.setState({ chat: newChat('exclamations') })}/>
            }
          </StyledInterations>
        </StyledHeader>
    </StyledWrapper>
    )
  }
}

HuskieBot.defaultProps = {
  adviceIsShown: false,
  chat: newChat('greetings'),
};

export { HuskieBot };
