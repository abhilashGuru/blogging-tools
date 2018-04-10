import React, { Component } from 'react';
import Dependencies from './Depndencies';
import './App.css';

class App extends Component {
  state = {
    dependencies: [
      {
        name: 'React.js',
        version: 'v16.3',
        url: 'https://reactjs.org'
      },
      {
        name: 'React Router',
        version: 'v4',
        url: 'https://reacttraining.com/react-router'
      },
      {
        name: 'axios',
        version: 'v3.2.2',
        url: 'https://github.com/axios/axios'
      },
      {
        name: 'react with styles',
        version: 'v3.1.1',
        url: 'https://github.com/airbnb/react-with-styles'
      },
      {
        name: 'Aphrodite',
        version: 'v2.1.0',
        url: 'https://github.com/Khan/aphrodite'
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Dependencies dependencies={this.state.dependencies} />
      </div>
    );
  }
}

export default App;
