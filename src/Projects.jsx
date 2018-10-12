import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import { Table } from 'reactstrap';
import AddProjectForm from './AddProjectForm';

export default class Projects extends Component {
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
        <Table hover>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map(project => (
              <tr key={project.id}>
                <th scope="row">{project.title}</th>
                <td>{project.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
