import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button/Button';

const StyledButtonGroup = styled('div')`
  align-items: center;
  display: flex;
  text-align: inherit;
`;

const PatterPanel = ( { onClick }) => (
    <StyledButtonGroup>
        <Button
            onClick={() => onClick('activities')}
            text="Activites"
        />
        <Button
            onClick={() => onClick('wisdom')}
            text="Wisdom"
        />
        <Button
            onClick={() => onClick('exclamations')}
            text="???"
        />
    </StyledButtonGroup>
);

PatterPanel.propTypes = {};

PatterPanel.defaultProps = {
    isDisabled: false,
};

export { PatterPanel };