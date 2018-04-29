import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import data from './work_data.json';
import WorkExperienceIndex from './WorkExperienceIndex';
import Show from './Show';
import NotFound from './NotFound';

const WorkExperience = ({ match }) => (
  <div>
    <Switch>
      <Route
        path={match.path}
        exact
        render={props => <WorkExperienceIndex {...props} data={data.work} />}
      />
      <Route
        path={`${match.path}/:id`}
        render={props => {
          const selectedExperience = data.work.find(
            work => work.slug === props.match.params.id
          );

          if (!selectedExperience) {
            return <NotFound />;
          }

          return (
            <Show
              backUrl={match.path}
              title={selectedExperience.title}
              date={selectedExperience.date}
              externalUrl={selectedExperience.external_url}
              description={selectedExperience.description}
              imagePreviewUrl={selectedExperience.image_preview_url}
              imagePreviewDescription={
                selectedExperience.image_preview_description
              }
              isProject={false}
            />
          );
        }}
      />
      <Route component={NotFound} />
    </Switch>

  </div>
);

WorkExperience.propTypes = {
  match: PropTypes.shape.isRequired
};

export default WorkExperience;
