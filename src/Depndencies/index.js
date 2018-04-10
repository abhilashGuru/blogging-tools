import React from 'react';
import PropTypes from 'prop-types';

import DependenciesList from './DependenciesList';
import DependenciesItem from './DependenciesItem';
import DependenciesHeader from './DependenciesHeader';

const Dependencies = ({ dependencies, width = 350 }) => (
  <div style={{ width: `${width}px` }}>
    <DependenciesHeader />
    <DependenciesList dependencies={dependencies} />
  </div>
);

Dependencies.propTypes = {
  dependencies: PropTypes.array.isRequired,
  width: PropTypes.number
};

export { DependenciesList, DependenciesItem };
export default Dependencies;
