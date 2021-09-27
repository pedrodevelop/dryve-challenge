import React from 'react';

import { Toolbar } from '@material-ui/core';
import AppBar from './styles';

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="" src="/assets/Logo.svg" />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
