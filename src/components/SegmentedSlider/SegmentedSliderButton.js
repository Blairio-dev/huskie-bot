import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colours, palette } from '../../tokens/colours';

const StyledButton = styled('button')`
    appearance: none;
    background: none;
    border: none;
    color: ${colours.body};
    ${props => !props.disabled && 'cursor: pointer'};
    font-size: 14px;
    font-weight: bold;
    height: 48px;
	position: relative;
	width: 108px;
	
	:after {
		display: inline-flex;
		border-right: 1px solid ${palette.transparent};
		content: '';
		height: 32px;
		left: 107px;
		padding: 0;
		position: absolute;
		top: 8px;
		transition: opacity 0.3s ease-in-out;
	}
`;

const SegmentedSliderButton = ({ isActive, onClick, text }) => (
	<StyledButton
		disabled={isActive}
		onClick={onClick}
	>
		{text}
	</StyledButton>
);

SegmentedSliderButton.propTypes = {
	/** Sets active state. */
	isActive: PropTypes.bool,
	/** Handler invoked when the button is clicked. */
	onClick: PropTypes.func,
	/** Text disaplyed in the button. */
	text: PropTypes.string.isRequired,
};

SegmentedSliderButton.defaultProps = {
	isActive: false,
};

export { SegmentedSliderButton };