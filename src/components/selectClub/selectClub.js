import React, { Component } from 'react';

import data from '../../clubs.json';



class SelectClub extends Component {
  constructor() {
    super();
    // this.state = {items: []}
  }
  // componentWillMount() {
  //   fetch('http://www.softomate.net/ext/employees/list.json')
  //     .then(response => response.json())
  //     .then(({result: items}) => this.setState({items}))
  // }

  render() {
    // let items = this.state.items;
    // console.log(items);
    for(let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    return (
      <ul>
        {
          data.map(function(movie){
            return <li key={movie.id}>{movie.id} - {movie.title}</li>;
          })
        }
      </ul>
    );
  }
}

export default SelectClub;