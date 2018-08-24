import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';

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
    // this.addProject = this.addProject.bind(this);
  }

  // addItem() {}

  updateInput(text, value) {
    this.setState({ title: value });
  }

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <div
          style={{
            padding: 50,
            textAlign: 'left',
            maxWidth: 500,
            margin: 'auto'
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
          {/* <button onClick={() => this.addItem()}>
            &#43; Add
          </button> */}
        </div>
      </div>
    );
  }
}

export default AddProjectForm;
