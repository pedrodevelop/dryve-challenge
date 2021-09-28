import { styled } from '@material-ui/core/styles';

import MuiVariantDrawer from '@material-ui/core/Drawer';

const drawerWidth = 280;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)} + 1px)`
  }
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

export const MuiDrawer = styled(MuiVariantDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
    '& .retractIcon': {
      transform: 'rotateY(0deg)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: '.4s'
      })
    },
    '& .MuiListItem-button': {
      transition: theme.transitions.create('padding', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      transition: theme.transitions.create('min-width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
    '& .retractIcon': {
      transform: 'rotateY(180deg)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: '.4s'
      })
    },
    '& .MuiListItem-button': {
      paddingLeft: theme.spacing(1),
      transition: theme.transitions.create('padding, background-color', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    '& .MuiListItemIcon-root': {
      minWidth: 56,
      transition: theme.transitions.create('min-width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  })
}));
