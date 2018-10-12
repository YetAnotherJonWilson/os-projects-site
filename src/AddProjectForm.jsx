import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      projectLinks: [],
      submittedBy: '',
      helpWanted: [],
      tags: []
    };

    this.updateInput = this.updateInput.bind(this);
    this.addProject = this.addProject.bind(this);

    AddProjectForm.propTypes = {
      newProject: PropTypes.func
    };

    AddProjectForm.defaultProps = {
      newProject: PropTypes.func
    };
  }

  addProject() {
    this.props.newProject(this.state.title, this.state.description);
  }

  updateInput(text, value) {
    this.setState({ [text]: value });
  }

  render() {
    const titleInput = (
      <input
        type="text"
        placeholder="Project title here"
        value={this.state.title}
        onChange={e => this.updateInput('title', e.target.value)}
      />
    );
    const projectInput = (
      <input
        type="text"
        placeholder="Write a description of the project"
        value={this.state.description}
        onChange={e => this.updateInput('description', e.target.value)}
      />
    );

    return (
      <div
        style={{
          textAlign: 'left',
          maxWidth: 500
        }}
      >
        Add Project
        <br />
        {titleInput}
        {projectInput}
        <button onClick={this.addProject}>
          Add
        </button>
      </div>
    );
  }
}
