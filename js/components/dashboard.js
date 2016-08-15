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
          <FeedWidget feed="http://matthewdaly.co.uk/rss.xml" />
        </div>
      </div>
    );
  }
});
