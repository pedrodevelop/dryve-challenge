import { styled } from '@material-ui/core/styles';

import MuiListItem from '@material-ui/core/ListItem';

const ListItem = styled(MuiListItem)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#1D2C4B',
  borderRadius: 6,
  height: 40,
  marginBottom: theme.spacing(1),
  '& .itemsIcon': {
    fill: '#FFF',
    color: '#1D2C4B'
  },
  '& .MuiListItemIcon-root': {
    paddingRight: theme.spacing(1)
  },
  '& .MuiTypography-root': {
    font: '500 14px/14px Inter, serif;'
  },
  '&:hover': {
    backgroundColor: '#0065FF',
    color: '#FFFFFF',
    '& .itemsIcon': {
      fill: 'none',
      color: '#FFFFFF'
    },
    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

export default ListItem;
