import React, { Component } from 'react';
import Story from './Story';

class News extends Component {

  render() {
    console.log(this.props.source);
    let news = this.props.source;
    news = news.slice(0,5).map(news => {
      return(
        <article>
          <Story info={news}/>
        </article>
      );
    });
    return(
      <div>
        {news}
      </div>
    );
  }
}

export default News;
