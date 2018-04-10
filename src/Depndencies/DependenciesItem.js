import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const DependenciesItem = ({ dependency }) => (
  <Fragment>
    <li className={css(styles.li)}>
      <a className={css(styles.liLinks)} href={dependency.url} target="_blank">
        <div>{dependency.name}</div>
        <div>{dependency.version}</div>
      </a>
    </li>
  </Fragment>
);

DependenciesItem.propTypes = {
  dependency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

const styles = StyleSheet.create({
  li: {
    margin: 0,
    padding: 0,
    color: '#fff',
    ':last-child > a': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    }
  },
  liLinks: {
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 15px',
    borderBottom: '1px solid #1a1a1a',
    ':hover': {
      backgroundColor: '#1a1a1a',
    },
    
  }
});

export default DependenciesItem;
