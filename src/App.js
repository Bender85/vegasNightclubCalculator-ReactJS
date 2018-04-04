import React, { Component } from 'react';
import './App.scss';

import  Logo from './components/logo/Logo';
import SelectClub from './components/selectClub/selectClub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <div className='calculator'>
          <div className='flex__container'>
            <div className="flex__container--item-left">
              <SelectClub/>
            </div>

            <div className="flex__container--item-rightfooty-calculator__recepit"></div>
          </div>
        </div>

        <div className="compare footy-compare"></div>
      </div>
    );
  }
}

export default App;
