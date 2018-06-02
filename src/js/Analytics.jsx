/* eslint-disable */

import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GOOGLE_ANALYTICS, {
  debug: process.env.NODE_ENV !== 'production'
});

class Analytics extends React.Component {
  componentDidMount() {
    this.sendPageChange(
      this.props.location.pathname,
      this.props.location.search
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname ||
      this.props.location.search !== prevProps.location.search
    ) {
      this.sendPageChange(
        this.props.location.pathname,
        this.props.location.search
      );
    }
  }

  sendPageChange(pathname, search) {
    const page = pathname + search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

export default Analytics;
