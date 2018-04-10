import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const DependenciesHeader = () => <h4 className={css(styles.h4)}>Dependencies</h4>;

const styles = StyleSheet.create({
  h4: {
    backgroundColor: '#1a1a1a',
    padding: '10px 15px',
    fontSize: '20px',
    color: '#fff',
    margin: 0,
    fontWeight: '400',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
  }
});

export default DependenciesHeader;
