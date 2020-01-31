import React, { Component } from 'react';

import styled from '@emotion/styled';
import { SubmitButton } from '../SubmitButton/SubmitButton';

const StyledAskerWrapper = styled('div')`
  display: inline-flex;
  margin-bottom: 12px;
  width: 100%;
`;

const StyledInput = styled('input')`
  border: none;
  border-radius: 0;
  font-size: 16px;
  height: 24px;
  margin-right: 8px;
  padding: 8px;
  text-align: inherit;
  width: -webkit-fill-available;
`;

class Asker extends Component {
	constructor(props) {
		super(props);

		const { inputIsEmpty = true } = props;

		this.state = { inputIsEmpty };
	}

	askQuestion() {
		this.props.updateQuestionChat();
		document.getElementById('questionInput').value = '';
		this.setState({ inputIsEmpty: true });
	}

	keyChecks(event) {
		var code = event.keyCode || event.which;

		if (code === 13) {
			this.askQuestion();
		}
	}

	inputValueCheck() {
		if (document.getElementById('questionInput').value === '') {
			this.setState({ inputIsEmpty: true });
		}

		if (document.getElementById('questionInput').value !== '') {
			this.setState({ inputIsEmpty: false });
		}
	}

	render() {
		const { inputIsEmpty } = this.state;
		return (
			<StyledAskerWrapper>
				<StyledInput
					id="questionInput"
					onChange={() => this.inputValueCheck()}
					onKeyPress={this.keyChecks.bind(this)}
				/>
				<SubmitButton
					isDisabled={inputIsEmpty}
					id="askButton"
					onClick={() => { this.askQuestion(); }}
					text="Ask"
				/>
			</StyledAskerWrapper>
		);
	}
}

Asker.propTypes = {};

Asker.defaultProps = {};

export { Asker };