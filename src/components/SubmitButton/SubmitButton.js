import React from 'react';
import PropTypes from 'prop-types';

import { colours } from '../../tokens/colours';
import styled from '@emotion/styled';

const StyledButton = styled('button')`
    align-items: center;
    appearance: none;
    background: ${props => props.disabled ? colours.buttonBackgroundDisabled : colours.buttonBackground};
	border: 1px solid ${props => props.disabled ? colours.buttonBorderDisabled : colours.buttonBorder};
	color: ${colours.body};
    ${props => !props.disabled && 'cursor: pointer'};
    display: flex;
    font-size: 14px;
    font-weight: bold;
    height: 40px;
`;

const SubmitButton = ({ isDisabled, onClick, text }) => (
	<StyledButton
		disabled={isDisabled}
		onClick={onClick}
	>
		{text}
	</StyledButton>
);

SubmitButton.propTypes = {
	/** Sets disbled state. */
	isDisabled: PropTypes.bool,
	/** Handler invoked when the button is clicked. */
	onClick: PropTypes.func,
	/** Text disaplyed in the button. */
	text: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
	isDisabled: false,
};

export { SubmitButton };