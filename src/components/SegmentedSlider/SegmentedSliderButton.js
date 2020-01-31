import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colours } from '../../tokens/colours';

const StyledButton = styled('button')`
    appearance: none;
    background: none;
    border: none;
    color: ${colours.body};
    ${props => !props.disabled && 'cursor: pointer'};
    font-size: 14px;
    font-weight: bold;
    height: 56px;
    min-width: 80px;
    width: 108px;
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