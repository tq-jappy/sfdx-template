import React from 'react';
import { Button, render, handleEvent } from 'react-lightning-renderer';

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>
          Count: {count}
        </p>
        <Button
          iconName="utility:add"
          onclick={() => this.setState({ count: this.state.count + 1 })}
        />
        <Button
          iconName="utility:dash"
          onclick={() => this.setState({ count: this.state.count - 1 })}
        />
      </div>
    );
  }
}

function init(cmp) {
  render(<App />, cmp);
}

export { init, handleEvent };