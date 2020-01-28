import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from '../Button/Button';

const StyledWrapper = styled('div')`
  align-items: center;
  display: flex;
  margin: 16px;
  text-align: inherit;
`;

const SegmentedSlider = ({ adviceIsShown, boostsAreShown, onClick, patterIsShown }) => (
<StyledWrapper>
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
</StyledWrapper>
);

SegmentedSlider.propTypes = {
    /** Handler invoked when the button is clicked. */
    onClick: PropTypes.func,
};

SegmentedSlider.defaultProps = {};

export { SegmentedSlider };