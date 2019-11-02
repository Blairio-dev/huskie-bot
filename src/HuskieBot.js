import React, { Component } from 'react';

import { Button } from './components/Button/Button';
import huskieBot from '../src/assets/HuskieBot.svg';
import { BoostBowl, PepsiMax, Pretzels } from '../src/components/Icons/icons.js';
import { huskisms } from '../src/assets/huskisms';
import styled from '@emotion/styled';
import { BoostButton } from './components/BoostButton/BoostButton';
import { Asker } from './components/Asker/Asker';

const BoostWrapper = styled('div')`
  height: 108px;
  position: relative;
`;

const StyledButtonGroup = styled('div')`
  align-items: center;
  display: flex;
  text-align: inherit;
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
      boostsAreShown = false,
      chat = newChat('colloquialisms'),
      previousQuestion = '',
    } = props;

    this.updateQuestionChats = this.updateQuestionChats.bind(this);

		this.state = {
      adviceIsShown,
      boostsAreShown,
      chat,
      previousQuestion,
		};
  }

  updateQuestionChats() {
    this.setState({ chat: newChat('answers'), previousQuestion: document.getElementById('questionInput').value });
  }

  clearLastQuestion() {
    this.setState({ previousQuestion: '' });
  }
    
  render() {
    const { adviceIsShown, boostsAreShown, chat, previousQuestion } = this.state;
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
              <span>{chat}</span>
            </StyledChatWrapper>
          </StyledHuskie>
          <StyledInterations>
          { adviceIsShown && <Asker updateQuestionChat={this.updateQuestionChats} /> }
          { boostsAreShown && <BoostWrapper>
            <BoostButton
              image={BoostBowl}
              left={8}
              onClick={() => this.setState({chat: newChat('foodPost')})}
            />
            <BoostButton
              image={Pretzels}
              left={131}
              onClick={() => this.setState({chat: newChat('foodPost')})}
            />
            <BoostButton
              image={PepsiMax}
              left={269}
              onClick={() => this.setState({chat: newChat('foodPost')})}
              />
          </BoostWrapper>
          }
          <StyledButtonGroup>
            <Button
              adviceIsShown={adviceIsShown}
              isDisabled={adviceIsShown}
              onClick={() =>
                this.setState({ adviceIsShown: true, boostsAreShown: false, chat: newChat('questions'), previousQuestion: ''})
              }
              text="Advice"
            />
            <Button
              adviceIsShown={adviceIsShown}
              isDisabled={boostsAreShown}
              onClick={() => this.setState({adviceIsShown: false, boostsAreShown: true, chat: newChat('food')})}
              text="Feed"
            />
            <Button
              adviceIsShown={adviceIsShown}
              onClick={() => this.setState({ adviceIsShown: false, boostsAreShown: false, chat: newChat('wisdom')})}
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
  boostsAreShown: false,
  chat: newChat('greetings'),
};

export { HuskieBot };
