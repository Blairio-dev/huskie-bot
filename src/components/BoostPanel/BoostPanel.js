import React from 'react';
import styled from '@emotion/styled';

import { BoostButton } from '../BoostButton/BoostButton';
import { BoostBowl, PepsiMax, Pretzels } from '../Icons/icons.js';

const BoostWrapper = styled('div')`
    display: inline-flex;
    justify-content: space-around;
    margin-bottom: 12px;
    width: 100%;
`;

const BoostPanel = ({ onClick }) => (
	<BoostWrapper>
		<BoostButton
			image={BoostBowl}
			left={8}
			onClick={() => onClick('foodPost')}
		/>
		<BoostButton
			image={Pretzels}
			left={131}
			onClick={() => onClick('foodPost')}
		/>
		<BoostButton
			image={PepsiMax}
			left={269}
			onClick={() => onClick('foodPost')}
		/>
	</BoostWrapper>
);
BoostPanel.defaultProps = {};

export { BoostPanel };