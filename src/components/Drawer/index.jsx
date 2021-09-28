import React from 'react';

import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  SvgIcon
} from '@material-ui/core';

import ListItem from './Items';
import List from './List';

import { MuiDrawer, DrawerHeader } from './styles';

import getIcon from '../GetIcon';

const drawerItems = [
  { text: 'Resumo', icon: 'dashboard', page: '/' },
  { text: 'Oportunidades', icon: 'tags' },
  { text: 'Agenda', icon: 'calendar' },
  { text: 'Veículos', icon: 'vehicle' },
  { text: 'Publicação', icon: 'rocket' },
  { text: 'Contatos', icon: 'user', page: '/contacts' },
  { text: 'Analytics', icon: 'chart' },
  { text: 'Financiamento', icon: 'bank' }
];

function Drawer() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerControl = () => {
    setOpen(!open);
  };

  return (
    <>
      <MuiDrawer variant="permanent" open={open}>
        <DrawerHeader />
        <List>
          {drawerItems.map(item => (
            <ListItem href={item.page} key={item.text}>
              <ListItemIcon>
                <SvgIcon className="itemsIcon">{getIcon(item.icon)}</SvgIcon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            padding: '0 24px 24px 24px',
            display: 'flex',
            justifyContent: open ? 'flex-end' : 'center'
          }}
        >
          <Button
            className="retractIcon"
            disableRipple
            onClick={handleDrawerControl}
            variant="text"
          >
            <img alt="" src="assets/DrawerIcons/RetractMenu.svg" />
          </Button>
        </Box>
      </MuiDrawer>
    </>
  );
}

export default Drawer;
