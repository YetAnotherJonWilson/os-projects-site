import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        {this.state.map(project => {
          return (
            <li
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectStarted={project.projectStarted}
              links={project.projectLinks}
            />))}
      </ul>}
    );
  }
}

export default Projects;
