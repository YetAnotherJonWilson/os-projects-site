import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import PropTypes from 'prop-types';

class AddProjectForm extends Component {
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
    return (
      <div>
        <SimpleStorage parent={this} />
        <div
          style={{
            textAlign: 'left',
            maxWidth: 500
          }}
        >
          Add Project
          <br />
          <input
            type="text"
            placeholder="Project title here"
            value={this.state.title}
            onChange={e => this.updateInput('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Write a description of the project"
            value={this.state.description}
            onChange={e => this.updateInput('description', e.target.value)}
          />
          <button onClick={this.addProject}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;
