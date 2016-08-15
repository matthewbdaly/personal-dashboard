import React from 'react';
import ClockWidget from './clockwidget';
import FeedWidget from './feedwidget';

export default React.createClass({
  render() {
    return (
      <div className="dashboard">
        <h1 ref="title">{this.props.title}</h1>
        <div className="wrapper">
          <ClockWidget />
          <FeedWidget feed="http://feeds.bbci.co.uk/news/rss.xml?edition=uk" size="5" />
        </div>
      </div>
    );
  }
});
