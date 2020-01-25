import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled('button')`
  appearance: none;
  background: ${props => props.disabled ? 'hsl(240, 22%, 28%)' : 'hsl(240, 22%, 18%)'};
  border: 1px solid ${props => props.disabled ? 'hsl(240, 22%, 38%)' : 'hsl(240, 22%, 48%)'};
  color: hsl(0, 0%, 100%);
  ${props => !props.disabled && 'cursor: pointer'};
  font-size: 14px;
  font-weight: bold;
  margin: 16px;
  min-width: 80px;
  padding: 16px 8px;
`;

const Button = ({ isDisabled, onClick, text }) => (
    <StyledButton
        disabled={isDisabled}
        onClick={onClick}
    >
        {text}
    </StyledButton>
);

Button.propTypes = {
	/** Sets disbled state. */
    isDisabled: PropTypes.bool,
    /** Handler invoked when the button is clicked. */
    onClick: PropTypes.func,
    /** Text disaplyed in the button. */
	text: PropTypes.string.isRequired,
};

Button.defaultProps = {
    isDisabled: false,
};

export { Button };