import React, { Component } from 'react';
import './App.css';
import Source from './components/Source';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceTime: [],
      sourceNatGeo: [],
      sourceMTV: [],
      sourceBBC: [],
    }
  }

  render() {
    return (
      <div>
        <Source term="time"></Source>
        <Source term="mtv-news"></Source>
        <Source term="bbc-news"></Source>
        <Source term="national-geographic"></Source>
      </div>
    );
  }
}

export default App;
