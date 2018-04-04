import React, { Component } from 'react';

import data from '../../clubs.json';



class SelectClub extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    // this.state = {items: []}
  }
  handleChange = (e) => {
    let val = e.target.value;
    this.setState({ value: val });
  };
  // componentWillMount() {
  //   fetch('http://www.softomate.net/ext/employees/list.json')
  //     .then(response => response.json())
  //     .then(({result: items}) => this.setState({items}))
  // }

  render() {
    let items = this.state.value;
    console.log(items);
    let _data = [];
    for(let i = 0; i < data.length; i++) {
      _data.push(data[i].club)
    }
    return (
      <select name="" id="" value={this.state.value} onChange={this.handleChange}>
        {
          _data[0].map(function(item, i){
            return <option key={i} value={item.name}>{item.name}</option>;
          })
        }
      </select>
    );
  }
}

export default SelectClub;