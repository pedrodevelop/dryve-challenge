import React from 'react';
import PropTypes from 'prop-types';

import List from './styles';

function DrawerList(props) {
  const { children } = props;

  return (
    <>
      <List>{children}</List>
    </>
  );
}

DrawerList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default DrawerList;
