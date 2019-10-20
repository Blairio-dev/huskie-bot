import React, { Component } from 'react';

import { Button } from './components/Button/Button';
import huskieBot from '../src/assets/huskieBot.svg';
import { huskisms } from '../src/assets/huskisms';
import styled from '@emotion/styled';
import { SubmitButton } from './components/SubmitButton/SubmitButton';

const StyledAskerWrapper = styled('div')`
  display: inline-flex;
  margin: 0 16px;
`;

const StyledButtonGroup = styled('div')`
  align-items: center;
  display: flex;
  text-align: inherit;
`;

const StyledChat = styled('span')`
  animation: typing 2s steps(44) 1 normal both;
  overflow: hidden;
  white-space: nowrap;

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
`;

const StyledChatWrapper = styled('p')`
  display: flex;
  flex-direction: column;
  margin: 0 8px 16px 8px;
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

const StyledInput = styled('input')`
  border: none;
  border-radius: 0;
  font-size: 16px;
  height: 24px;
  margin-right: 8px;
  padding: 8px;
  text-align: inherit;
  width: -webkit-fill-available;
`;

const StyledInterations = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 16px;
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

const StyledPreviousQuetion = styled('span')`
  color: hsl(48, 88%, 67%);
  font-size: calc(12px + 2vmin);
  margin-bottom: 2px;
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

		const { 
      adviceIsShown = false,
      chat = newChat('colloquialisms'),
      inputIsEmpty = true,
      previousQuestion = '',
    } = props;

		this.state = {
      adviceIsShown,
      chat,
      inputIsEmpty,
      previousQuestion,
		};
  }

  askQuestion() {
    this.setState({ chat: newChat('answers'), previousQuestion: document.getElementById('questionInput').value });
    document.getElementById('questionInput').value = '';
    this.setState({ inputIsEmpty: true })
  }

  clearLastQuestion() {
    this.setState({ previousQuestion: '' });
  }

  keyChecks(event) {
    var code = event.keyCode || event.which;

    if(code === 13) {
      this.askQuestion();
    }
  }

  inputValueCheck() {
    if(document.getElementById('questionInput').value === '') {
      this.setState({ inputIsEmpty: true });
    }

    if(document.getElementById('questionInput').value !== '') {
      this.setState({ inputIsEmpty: false });
    }
  }
    
  render() {
    const { adviceIsShown, chat, inputIsEmpty, previousQuestion } = this.state;
    return (
      <StyledWrapper>
        <StyledHeader>
          <h1>HuskieBot</h1>
          <StyledHuskie>
            <StyledLogo src={huskieBot} alt="logo" />
            <StyledChatWrapper>
              {previousQuestion && adviceIsShown &&
                <StyledPreviousQuetion>{previousQuestion}</StyledPreviousQuetion>
              }
              <StyledChat>{chat}</StyledChat>
            </StyledChatWrapper>
          </StyledHuskie>
          <StyledInterations>
          { adviceIsShown && 
            <StyledAskerWrapper>
              <StyledInput
                id="questionInput"
                onChange={() => this.inputValueCheck()}
                onKeyPress={this.keyChecks.bind(this)}
              />
              <SubmitButton
                isDisabled={inputIsEmpty}
                inputIsEmpty={inputIsEmpty}
                id="askButton"
                onClick={() => this.askQuestion()}
                text="Ask"
              />
            </StyledAskerWrapper>
        }
          <StyledButtonGroup>
            <Button
              adviceIsShown={adviceIsShown}
              isDisabled={adviceIsShown}
              onClick={() =>
                this.setState({ adviceIsShown: true, chat: newChat('questions'), previousQuestion: ''})
              }
              text="Advice"
            />
            <Button
              adviceIsShown={adviceIsShown}
              onClick={() => this.setState({adviceIsShown: false, chat: newChat('foodPost')})}
              text="Feed"
            />
            <Button
              adviceIsShown={adviceIsShown}
              onClick={() => this.setState({ adviceIsShown: false, chat: newChat('wisdom')})}
              text="Wisdom"
            />
          </StyledButtonGroup>
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
