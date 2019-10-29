import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLogo = styled('img')`
    bottom: 0;
    height: 104px;
    left: ${props => props.left}px;
    pointer-events: none;
    position: absolute;
`;

const BoostButton = ({ image, left }) => (
    <StyledLogo
        left={left}
        src={image}
   />
);

BoostButton.propTypes = {
	/** Svg. */
    image: PropTypes.string,
};

export { BoostButton };