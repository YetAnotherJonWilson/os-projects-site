/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const buffer = fs.readFileSync('./data.json');
const projectsObj = JSON.parse(buffer);
const app = express();
app.use(cors());
const projects = projectsObj.projects.map(project =>
  Object.assign(
    {
      rating: `${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}`
    },
    project
  )
);

app.get('/:title', (req, res) => {
  const project = projects.find(item => item.title === req.params.title);
  if (project) {
    console.log(project.title);
    setTimeout(() => res.json(project), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.title);
    res.status(404).json({ error: 'project not found' });
  }
});

console.log(`Starting server on port 3000`);
app.listen(3000);
