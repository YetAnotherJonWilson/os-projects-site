import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>List of Projects and Ideas</h1>
        <Project />
      </div>
    );
  }
}

export default App;
