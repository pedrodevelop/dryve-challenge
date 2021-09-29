import React from 'react';

import { Toolbar, Box, Badge, IconButton, Avatar } from '@material-ui/core';

import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import SelectCompany from './SelectCompany';
import AppBar from './styles';

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="" src="/assets/Logos/DryveLogo.svg" />
          <SelectCompany />
          <Box sx={{ flexGrow: 1 }} />
          <Box mr={2}>
            <IconButton>
              <Badge color="warning" variant="dot">
                <NotificationsNoneSharpIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton className="userProfile" disableRipple>
            <Avatar src="/assets/Avatar.svg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
