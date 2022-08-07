/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/base.css';
import './styles/globals.css';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
