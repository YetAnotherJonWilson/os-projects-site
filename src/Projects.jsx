import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        id: 0,
        title: '',
        description: '',
        individualProjectsArray: [],
        projectStarted: false,
        projectLinks: [],
        submittedBy: '',
        helpWanted: [],
        tags: []
      }
    };
  }

  render() {
    return (
      <ul>
        {this.state.map(project => (
          <li
            title={project.title}
            description={project.description}
            tags={project.tags}
            projectStarted={project.projectStarted}
            links={project.projectLinks}
          />
        ))}
      </ul>
    );
  }
}

export default Projects;
