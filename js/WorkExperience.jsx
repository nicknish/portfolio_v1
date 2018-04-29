import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import data from './work_data.json';
import WorkExperienceIndex from './WorkExperienceIndex';
import WorkExperienceShow from './WorkExperienceShow';
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
            <WorkExperienceShow
              backUrl={match.path}
              experience={selectedExperience}
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
