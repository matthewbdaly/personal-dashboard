import React from 'react';
import jQuery from 'jquery';
window.jQuery = jQuery;

const FeedItem = React.createClass({
  render() {
    return (
      <a href={this.props.link}>
        <li className="feeditem" key={this.props.link}>{this.props.title}</li>
      </a>
    );
  }
});

export default React.createClass({
  getInitialState() {
    return {
      feed: []
    };
  },
  componentDidMount() {
    let that = this;
    jQuery.ajax({
      url: this.props.feed,
      error: function (response) {
        let xml = jQuery(response.responseText);
        let feed = [];
        xml.find('item').each(function () {
          let item = {};
          item.title = jQuery(this).find('title').text();
          item.link = jQuery(this).find('guid').text();
          feed.push(item);
        });
        that.setState({
          feed: feed
        });
      }
    });
  },
  render() {
    let feedItems = this.state.feed.map(function (item, index) {
      return (
        <FeedItem title={item.title} link={item.link}></FeedItem>
      );
    });
    return (
      <div className="feedwidget widget">
        <div className="widget-content">
          <h2 ref="feed"> Fetched from {this.props.feed}</h2>
          <ul>
            {feedItems}
          </ul>
        </div>
      </div>
    );
  }
});
