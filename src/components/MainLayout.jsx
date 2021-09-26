import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Box sx={{ display: 'flex' }}>{children}</Box>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MainLayout;
