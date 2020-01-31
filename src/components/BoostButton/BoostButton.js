import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled('button')`
    background: none;
    border: none;
    bottom: 0;
    height: 104px;
    padding: 0;
`;

const StyledLogo = styled('img')`
    height: 104px;
    pointer-events: none;
    width: 102px;
`;

const BoostButton = ({ image, left, onClick }) => (
	<StyledButton left={left} onClick={onClick}>
		<StyledLogo
			src={image}
		/>
	</StyledButton>
);

BoostButton.propTypes = {
	/** Svg. */
	image: PropTypes.string,
	/** Callback function called when button is clicked. */
	onClick: PropTypes.func,
};

export { BoostButton };