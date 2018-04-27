import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import data from './projects_data.json';
import ProjectsIndex from './ProjectsIndex';
import ProjectShow from './ProjectShow';

const Projects = ({ match }) => (
  <div>
    <Switch>
      <Route
        path={match.path}
        exact
        render={props => <ProjectsIndex {...props} data={data.projects} />}
      />
      <Route
        path={`${match.path}/:id`}
        render={props => {
          const selectedProject = data.projects.find(
            project => project.slug === props.match.params.id
          );

          return <ProjectShow backUrl={match.path} project={selectedProject} />;
        }}
      />
    </Switch>
  </div>
);

Projects.propTypes = {
  match: PropTypes.shape.isRequired
};

export default Projects;
