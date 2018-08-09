import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      individualProjectsArray: [],
      projectStarted: false,
      projectLinks: [],
      submittedBy: '',
      helpWanted: [],
      tags: []
    };
  }

  render() {
    return (
      <div>
        <li
          title={this.state.title}
          description={this.state.description}
          tags={this.state.tags}
          projectStarted={this.state.projectStarted}
          links={this.state.projectLinks}
        />
      </div>
    );
  }
}

export default Project;
