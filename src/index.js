import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HuskieBot } from './HuskieBot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HuskieBot />, document.getElementById('root'));

serviceWorker.unregister();
