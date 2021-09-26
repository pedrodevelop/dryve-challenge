import React from 'react';

import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import { MuiDrawer, DrawerHeader } from './styles';

function Drawer() {
  const [open, setOpen] = React.useState(true);

  const handleControlDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <MuiDrawer variant="permanent" open={open}>
        <DrawerHeader />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>Teste</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem>
            <Button onClick={handleControlDrawer}>Clique</Button>
          </ListItem>
        </List>
      </MuiDrawer>
    </>
  );
}

export default Drawer;
