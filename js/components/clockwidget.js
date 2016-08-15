import React from 'react';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {
      time: this.props.time || moment()
    };
  },
  render() {
    const time = moment(this.state.time).format('dddd, Do MMMM YYYY, h:mm:ss a');
    return (
      <div className="clockwidget widget">
        <div className="widget-content">
          <h2 ref="time">{time}</h2>
        </div>
      </div>
    );
  }
});
