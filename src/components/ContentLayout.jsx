import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@material-ui/core/Box';

import { styled } from '@material-ui/core/styles';

const Box = styled(MuiBox)(({ theme }) => ({
  height: '100vh',
  flexGrow: 1,
  paddingTop: theme.spacing(8),
  backgroundColor: '#f9f9f9'
}));

function ContentLayout(props) {
  const { children } = props;

  return (
    <>
      <Box component="main">{children}</Box>
    </>
  );
}

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ContentLayout;
