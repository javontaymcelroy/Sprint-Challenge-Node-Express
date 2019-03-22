import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    actions: []
  };

  componentDidMount() {
    axios
      .get('https://sprint-api-jm.herokuapp.com/api/actions')
      .then(res => this.setState({ actions: res }))
      .catch(err => console.log(err));
  }

  render() {
    return <div>hello</div>;
  }
}

export default App;
