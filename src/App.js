import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.scss';

import  Logo from './components/logo/Logo';
import  load from './utils/load';
import SelectClub from './components/selectClub/selectClub';


// import reducers from './reducers';
// const store = createStore(reducers);
const red = () => {};
const store = createStore(red);

class App extends Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: null,
      // active: 0,
      // term: ''
    };
    // Сразу загружаем данные
    this.loadData();
  }

  loadData() {
    load('https://swapi.co/api/planets/').then(users => {
      this.setState({
        data: JSON.parse(users)
      });
    });
  }

  render() {
    console.log(this.state.data);
    console.log(store);
    return (
      <Provider store={store}>
        <div className="App">
          <Logo/>
          <div className='calculator'>
            <div className='flex__container'>
              <div className="flex__container--item-left">
                <SelectClub/>
              </div>

              <div className="flex__container--item-right footy-calculator__recepit"></div>
            </div>
          </div>

          <div className="compare footy-compare"></div>
        </div>
      </Provider>
    );
  }
}

export default App;
