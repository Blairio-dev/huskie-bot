import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SegmentedSliderButton } from './SegmentedSliderButton';

const getLeftPosition = (adviceIsShown, boostsAreShown, patterIsShown) => {
  let left;
  if (adviceIsShown) {
    left= '8px';
  } else if (boostsAreShown) {
    left= '116px';
  } else if (patterIsShown) {
    left= '224px';
  }
  return left;
};

const StyledSelector = styled('div')`
  background: hsla(0, 0%, 70%, 15%);
  ${props => props.isShown && 'visibility: hidden;'}
  left: ${props => getLeftPosition(props.adviceIsShown, props.boostsAreShown, props.patterIsShown)};
  height: 40px;
  pointer-events: none;
  position: absolute;
  touch-action: inherit;
  transition: left 0.2s ease-in-out;
  width: 92px
`;

const StyledWrapper = styled('div')`
  align-items: center;
  background: hsl(237, 23%, 18%);
  display: flex;
  position: relative;
  text-align: inherit;
`;

const SegmentedSlider = ({ adviceIsShown, boostsAreShown, hasInteractions, onClick, patterIsShown }) => (
<StyledWrapper>
    <SegmentedSliderButton
      isActive={adviceIsShown}
      onClick={() => onClick('questions')}
      text="Advice"
    />
    <SegmentedSliderButton
      isActive={boostsAreShown}
      onClick={() => onClick('food')}
      text="Feed"
    />
    <SegmentedSliderButton
      isActive={patterIsShown}
      onClick={() => onClick('coversational')}
      text="Patter"
    />
    <StyledSelector 
      adviceIsShown={adviceIsShown}
      boostsAreShown={boostsAreShown}
      patterIsShown={patterIsShown}
      isShown={!hasInteractions}
    />
</StyledWrapper>
);

SegmentedSlider.propTypes = {
    /** Handler invoked when the button is clicked. */
    onClick: PropTypes.func,
};

SegmentedSlider.defaultProps = {};

export { SegmentedSlider };