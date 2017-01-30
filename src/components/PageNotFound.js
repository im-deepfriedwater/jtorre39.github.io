import React, { PropTypes } from 'react';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <p>
      Page not found - the path, {location.pathname},
      did not match any React Router routes.
    </p>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
