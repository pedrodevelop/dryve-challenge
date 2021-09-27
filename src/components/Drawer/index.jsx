import React from 'react';

import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import ListItems from './Items';
import List from './List';

import { MuiDrawer, DrawerHeader } from './styles';

import getIcon from '../../utils/getIcon';

const items = [
  { text: 'Resumo', icon: 'dashboard' },
  { text: 'Oportunidades', icon: 'tags' },
  { text: 'Agenda', icon: 'calendar' },
  { text: 'Veículos', icon: 'vehicle' },
  { text: 'Publicação', icon: 'rocket' },
  { text: 'Contatos', icon: 'user' },
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
          {items.map(item => (
            <ListItems key={item}>
              <ListItemIcon>
                <img alt="" src={getIcon(item.icon)} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItems>
          ))}
          <ListItem>
            <Button onClick={handleDrawerControl}>Clique</Button>
          </ListItem>
        </List>
      </MuiDrawer>
    </>
  );
}

export default Drawer;
