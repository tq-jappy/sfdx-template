import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

module.exports = {
  render: (element) => {
    console.log('render app');
    ReactDOM.render(<App />, element);
  }
}