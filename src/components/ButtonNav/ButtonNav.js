import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from '../Button/Button';

const StyledButtonGroup = styled('div')`
  align-items: center;
  display: flex;
  text-align: inherit;
`;

const ButtonNav = ({ adviceIsShown, boostsAreShown, onClick, patterIsShown }) => (
	<StyledButtonGroup>
		<Button
			isActive={adviceIsShown}
			onClick={() => onClick('questions')}
			text="Advice"
		/>
		<Button
			isActive={boostsAreShown}
			onClick={() => onClick('food')}
			text="Feed"
		/>
		<Button
			isActive={patterIsShown}
			onClick={() => onClick('coversational')}
			text="Patter"
		/>
	</StyledButtonGroup>
);

ButtonNav.defaultProps = {};

export { ButtonNav };