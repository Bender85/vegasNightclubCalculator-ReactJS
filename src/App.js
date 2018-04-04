import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import  Logo from './components/logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
      </div>
    );
  }
}

export default App;
