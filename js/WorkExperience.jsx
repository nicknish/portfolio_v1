import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import data from './work_data.json';
import WorkExperienceIndex from './WorkExperienceIndex';
import WorkExperienceShow from './WorkExperienceShow';

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

          return (
            <WorkExperienceShow
              backUrl={match.path}
              experience={selectedExperience}
            />
          );
        }}
      />
    </Switch>

  </div>
);

/*


{data.work.map(work => <ProjectsIndexCard project={work} key={uuid()} />)}
{data.work.map(work => (
  <Route
    exact
    to={work.url}
    render={props => (
      <ProjectShow
        project={work}
        backLink={`${match.path}/bonsai`}
        {...props}
      />
    )}
  />
))}
*/

WorkExperience.propTypes = {
  match: PropTypes.shape.isRequired
};

export default WorkExperience;
