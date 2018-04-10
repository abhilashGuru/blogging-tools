import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import DependenciesItem from './DependenciesItem';

const DependenciesList = ({ dependencies }) => (
  <ul className={css(styles.ul)}>
    {dependencies.map(dependency => (
      <DependenciesItem dependency={dependency} key={dependency.url} />
    ))}
  </ul>
);

DependenciesList.propTypes = {
  dependencies: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  ul: {
    margin: 0,
    padding: 0,
  }
});

export default DependenciesList;
