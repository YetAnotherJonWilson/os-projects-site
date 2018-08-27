import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import AddProjectForm from './AddProjectForm';

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

    this.addNewProject = this.addNewProject.bind(this);
  }

  addNewProject(title, description) {
    this.setState(prevState => ({
      projects: [
        ...prevState.projects,
        { id: this.state.projects.length, title, description }
      ]
    }));

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />

        <AddProjectForm newProject={this.addNewProject} />
        <ul>
          {this.state.projects.map(project => (
            <li key={project.id}>
              {project.title}, {project.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
