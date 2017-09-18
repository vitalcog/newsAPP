import React, { Component } from 'react';

class Story extends Component {
  render() {
    return(
      <a href={this.props.info.url}>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.author}</p>
        <h2>{this.props.info.description}</h2>
        <img alt={this.props.info.url} src={this.props.info.urlToImage}/>
      </a>
    );
  }
}

export default Story;
