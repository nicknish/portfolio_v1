import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import data from './projects_data.json';
import ProjectsIndex from './ProjectsIndex';
import Show from './Show';
import NotFound from './NotFound';

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

          if (!selectedProject) {
            return <NotFound />;
          }

          return (
            <Show
              backUrl={match.path}
              title={selectedProject.title}
              date={selectedProject.date}
              externalUrl={selectedProject.external_url}
              description={selectedProject.description}
              imagePreviewUrl={selectedProject.image_preview_url}
              imagePreviewDescription={
                selectedProject.image_preview_description
              }
              isProject
            />
          );
        }}
      />
    </Switch>
  </div>
);

Projects.propTypes = {
  match: PropTypes.shape.isRequired
};

export default Projects;
