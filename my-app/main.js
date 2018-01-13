import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

module.exports = {
  render: () => {
    console.log('render app');
    ReactDOM.render(<App />, document.getElementById('root'));
  }
}