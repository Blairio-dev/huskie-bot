import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SegmentedSliderButton } from './SegmentedSliderButton';

const getLeftPosition = (adviceIsShown, boostsAreShown, patterIsShown) => {
	let left;
	if (adviceIsShown) {
		left = '4px';
	} else if (boostsAreShown) {
		left = '112px';
	} else if (patterIsShown) {
		left = '220px';
	}
	return left;
};

const StyledSelector = styled('div')`
	background: hsla(0, 0%, 70%, 15%);
	${props => props.isShown && 'visibility: hidden;'}
	left: ${props => getLeftPosition(props.adviceIsShown, props.boostsAreShown, props.patterIsShown)};
	height: 40px;
	pointer-events: none;
	position: absolute;
	touch-action: inherit;
	transition: left 0.2s ease-in-out;
	width: 108px;
`;

const StyledWrapper = styled('div')`
  	align-items: center;
	background: hsl(237, 23%, 18%);
	display: flex;
	padding: 0 4px;
	position: relative;
	text-align: inherit;

	${props => props.adviceIsShown &&
		`button:first-of-type:after {
			opacity: 0;
	}`}

	${props => props.boostsAreShown &&
		`button:first-of-type:after {
		opacity: 0;
		}
		button:nth-of-type(2):after {
			opacity: 0;
		}`}

	${props => props.patterIsShown &&
		`button:nth-of-type:after {
			opacity: 0;
		}`}

	button:last-of-type:after {
		content: unset;
	}
`;

const SegmentedSlider = ({ adviceIsShown, boostsAreShown, hasInteractions, onClick, patterIsShown }) => (
	<StyledWrapper adviceIsShown={adviceIsShown} boostsAreShown={boostsAreShown} patterIsShown={patterIsShown}>
		<SegmentedSliderButton
			isActive={adviceIsShown}
			onClick={() => onClick('questions')}
			text="Advice"
		/>
		<SegmentedSliderButton
			isActive={boostsAreShown}
			onClick={() => onClick('food')}
			text="Feed"
		/>
		<SegmentedSliderButton
			isActive={patterIsShown}
			onClick={() => onClick('coversational')}
			text="Patter"
		/>
		<StyledSelector
			adviceIsShown={adviceIsShown}
			boostsAreShown={boostsAreShown}
			patterIsShown={patterIsShown}
			isShown={!hasInteractions}
		/>
	</StyledWrapper>
);

SegmentedSlider.propTypes = {
	/** Handler invoked when the button is clicked. */
	onClick: PropTypes.func,
};

SegmentedSlider.defaultProps = {};

export { SegmentedSlider };