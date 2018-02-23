import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import  Logo from './components/logo/Logo';
import  Calculation from './components/calculator/Calculation';
import  Compare from './components/compare/Compare';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
          <Logo/>
          <Calculation/>
          <Compare/>
      </div>
    );
  }
}

export default App;
