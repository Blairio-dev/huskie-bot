import React from 'react';

import { colours } from '../../tokens/colours';
import styled from '@emotion/styled';

const StyledButton = styled('button')`
  appearance: none;
  background: ${props => props.disabled ? colours.buttonBackgroundDisabled : colours.buttonBackground};
  border: 1px solid ${props => props.disabled ? colours.buttonBorderDisabled : colours.buttonBorder};
  color: ${colours.body};
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