import React from 'react';
import ReactDOM from 'react-dom';

import HuskieBot from './HuskieBot';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HuskieBot />, div);
	ReactDOM.unmountComponentAtNode(div);
});
