import React, { Component } from 'react';

import { colours } from '../../tokens/colours';
import styled from '@emotion/styled';
import Brain from '../../assets/Brain.svg';

const StyledButton = styled('button')`
	appearance: none;
	background: ${colours.buttonBackground};
	border: 1px solid ${colours.buttonBorder};
	${props => props.isOpen && `border-color: ${colours.buttonBackground};`}
	border-radius: ${props => (props.isOpen ? '16px 16px 0 0' : '50')}px;
	cursor: pointer;
	font-weight: bold;
	outline: none;
    padding: 12px;
    position: fixed;
    right: 24px;
	top: 24px;
	transition: all 0.3s;
`;

const StyledLogo = styled('img')`
	height: 48px;
	pointer-events: none;
`;

const StyledExtrasMenu = styled('div')`
	background: ${colours.buttonBackground};
	border-radius: 16px 0 16px 16px;
	box-sizing: border-box;
	color: white;
	display: flex;
	flex-direction: column;
	opacity: ${props => (props.isOpen ? '1' : '0')};
	padding: 16px 0;
	position: absolute;
	right: 24px;
	text-align: left;
	top: 101px;
	transition: bottom 0.3s linear, opacity 0.2s linear ${props => props.isOpen && '0.2s'};

	div {
		margin-bottom: 0px;
	}

	ul {
		font-size: 18px;
		list-style: none;
		padding-left: 0;
		margin: 0;
		border-bottom: 1px solid hsl(237, 22%, 30%);

		li {
			background-color: hsl(237, 22%, 20%);
			border-top: 1px solid hsl(237, 22%, 30%);
			padding: 8px 16px;
			margin-bottom: 0;
		}
	}
`;

const StyledWrapper = styled('div')`
	display: flex;
`;


class ExtrasMenuButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	render() {
		const { isOpen } = this.state;

		return (
			<StyledWrapper>
				<StyledButton
					isOpen={isOpen}
					onClick={() => this.setState(prevState => ({ isOpen: !prevState.isOpen }))}
				>
					<StyledLogo src={Brain} alt="HuskieBrain" />
				</StyledButton>
				<StyledExtrasMenu isOpen={isOpen}>
					<ul>
						<li>
							<button>View full compendium.</button>
						</li>
						<li>
							<button>Submit huskism.</button>
						</li>
					</ul>
				</StyledExtrasMenu>
			</StyledWrapper>
		);
	}
}

ExtrasMenuButton.defaultProps = {
	isOpen: false,
};

export { ExtrasMenuButton };