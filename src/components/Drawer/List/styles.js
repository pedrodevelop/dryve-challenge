import { styled } from '@material-ui/core/styles';

import MuiList from '@material-ui/core/List';

const List = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(3, 3, 0),
  '& .MuiListItem-button.Mui-selected': {
    backgroundColor: '#0065FF',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#014EDC'
    },
    '& .MuiListItemIcon-root path': {
      stroke: '#FFFFFF'
    },
    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  '& .MuiListItem-button': {
    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

export default List;
