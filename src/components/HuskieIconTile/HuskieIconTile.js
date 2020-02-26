import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import HuskieBot from '../../assets/HuskieBot.svg';
import Huh from '../../assets/sounds/Huh.mp3';

const StyledChatWrapper = styled('p')`
  display: flex;
  flex-direction: column;
  margin: 0 8px 16px 8px;
  min-height: 58px;
`;

const StyledHuskie = styled('div')`
  min-height: 20vh;
  text-align: inherit;
`;

const StyledLogo = styled('img')`
  animation: Head-shake infinite 0.5s alternate linear;
  height: 210px;
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
  margin-bottom: 4px;
`;

const StyledSoundButton = styled('button')`
	background: none;	
	border: none;

	:focus {
		outline: 0;
	}
`;

const HuskieIconTile = ({ adviceIsShown, chat, previousQuestion }) => {
	let audio = new Audio(Huh);

	const start = () => {
		audio.play();
	};

	return (
		<StyledHuskie>
			<StyledSoundButton onClick={start} tabIndex="-1">
				<StyledLogo src={HuskieBot} alt="logo" />
			</StyledSoundButton>
			<StyledChatWrapper>
				{previousQuestion && adviceIsShown &&
					<StyledPreviousQuetion>{previousQuestion}</StyledPreviousQuetion>
				}
				<span id="chat">{chat}</span>
			</StyledChatWrapper>
		</StyledHuskie>
	);
};

HuskieIconTile.propTypes = {
	/** Handler invoked when the button is clicked. */
	onClick: PropTypes.func,
};

HuskieIconTile.defaultProps = {};

export { HuskieIconTile };