import React from 'react';

import { Toolbar, Typography } from '@material-ui/core';
import AppBar from './styles';

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DryverPro
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
