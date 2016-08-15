import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';
import styles from '../scss/style.scss';

ReactDOM.render(
  <Dashboard title="My Dashboard" />,
  document.getElementById('view')
);
