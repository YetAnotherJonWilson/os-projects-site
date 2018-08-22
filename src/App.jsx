import React, { Component } from 'react';
import { render } from 'react-dom';
import Projects from './Projects';
import AddProjectForm from './AddProjectForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>List of Projects and Ideas</h1>
        <Projects />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
