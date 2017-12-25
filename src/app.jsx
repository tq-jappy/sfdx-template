import React from 'react';
import { render } from 'react-dom';

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import Button from 'design-system-react/components/button';

class App extends React.Component {
  render () {
    return <p> Hello React!!</p>
  }
}

render(<App />, document.getElementById('app'));