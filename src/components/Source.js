import React, { Component } from 'react';
import News from './News'

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiTerm: this.props.term,
      source: [],
    }
  }

  componentWillMount() {
    fetch((' https://newsapi.org/v1/articles?source='+this.state.apiTerm+'&apiKey=df32492da0ab419dabec21df39a9a9c3'))
      .then(response => response.json() )
      .then(response => {
        this.setState({
          source: response.articles,
        });
        console.log(this.state.source);
      });
  }

  render() {
    return(
      <div>
        <News source={this.state.source}/>
      </div>
    );
  }
}

export default Source;
