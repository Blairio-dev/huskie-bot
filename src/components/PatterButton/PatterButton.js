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
  margin: 12px 7px;
  min-width: 94px;
  padding: 11px 8px;
`;

const PatterButton = ({ isDisabled, onClick, text }) => (
	<StyledButton
		disabled={isDisabled}
		onClick={onClick}
	>
		{text}
	</StyledButton>
);

PatterButton.defaultProps = {
	isDisabled: false,
};

export { PatterButton };