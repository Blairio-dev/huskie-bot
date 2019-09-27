import React, { Component } from 'react';
import styled from '@emotion/styled';
import './HuskieBot.css';
import huskieBot from '../src/assets/HuskieBot.svg';
import { huskisms } from '../src/assets/huskisms';

const StyledAskerWrapper = styled('div')`
  display: inline-flex;
  margin: 0 16px;
`;

const StyledButton = styled('button')`
  appearance: none;
  background: ${props => props.adviceIsShown ? 'hsl(240, 22%, 28%)' : 'hsl(240, 22%, 18%)'};
  border: 1px solid ${props => props.adviceIsShown ? 'hsl(240, 22%, 38%)' : 'hsl(240, 22%, 48%)'};
  color: hsl(0, 0%, 100%);
  ${props => !props.adviceIsShown && 'cursor: pointer'};
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
  margin: 0 8px 8px 8px;
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

const StyledSubmitButton = styled('button')`
  align-items: center;
  appearance: none;
  background: ${props => props.inputIsEmpty ? 'hsl(240, 22%, 28%)' : 'hsl(240, 22%, 18%)'};
  border: 1px solid ${props => props.inputIsEmpty ? 'hsl(240, 22%, 38%)' : 'hsl(240, 22%, 48%)'};
  color: hsl(0, 0%, 100%);
  ${props => !props.inputIsEmpty && 'cursor: pointer'};
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
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

		const { adviceIsShown = false, chat = newChat('colloquialisms'), inputIsEmpty = true } = props;

		this.state = {
      adviceIsShown,
      chat,
      inputIsEmpty,
		};
  }

  askQuestion() {
    this.setState({ chat: newChat('answers') });
    document.getElementById('questionInput').value = '';
    this.setState({ inputIsEmpty: true })
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
    const { adviceIsShown, chat, inputIsEmpty } = this.state;
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
          { adviceIsShown && 
              <StyledAskerWrapper>
                <StyledInput
                  id="questionInput"
                  onChange={() => this.inputValueCheck()}
                  onKeyPress={this.keyChecks.bind(this)}
                />
                <StyledSubmitButton
                  disabled={inputIsEmpty}
                  inputIsEmpty={inputIsEmpty}
                  id="askButton"
                  onClick={() => this.askQuestion()}
                > 
                  Ask
                </StyledSubmitButton>
              </StyledAskerWrapper>
            }
            <StyledButtonGroup>
              <StyledButton
                adviceIsShown={adviceIsShown}
                disabled={adviceIsShown}
                onClick={() => this.setState({ adviceIsShown: true, chat: newChat('questions')  })}
              >
                  Advice
                </StyledButton>
                <StyledButton onClick={() => this.setState({ adviceIsShown: false, chat: newChat('foodPost') })}>
                  Feed
                </StyledButton>
                <StyledButton onClick={() => this.setState({ adviceIsShown: false, chat: newChat('wisdom') })}>
                  Wisdom
                </StyledButton>
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
