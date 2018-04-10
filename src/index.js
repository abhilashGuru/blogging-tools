import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Typography from 'typography'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
WebFont.load({
  google: {
    families: ['Nunito']
  }
});

const typography = new Typography({
  headerFontFamily: ['Nunito', 'serif'],
  bodyFontFamily: ['Nunito', 'serif'],
})

typography.injectStyles()