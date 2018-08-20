import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 0,
          title: 'Test',
          description: 'first test project',
          individualProjectsArray: ['title1', 'title2'],
          projectStarted: false,
          projectLinks: [],
          submittedBy: '',
          helpWanted: [],
          tags: []
        }
      ]
    };
  }

  render() {
    return (
      <ul>
        {this.state.projects.map(project => (
          <li key={project.id}>
            {project.title}, {project.description}
          </li>
        ))}
      </ul>
    );
  }
}

export default Projects;
