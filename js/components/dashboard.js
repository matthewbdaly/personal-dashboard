import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="dashboard">
        <h1 ref="title">{this.props.title}</h1>
        <div className="wrapper">
        </div>
      </div>
    );
  }
});
