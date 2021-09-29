import { styled } from '@material-ui/core/styles';

import MuiListItemButton from '@material-ui/core/ListItemButton';

const ListItemButton = styled(MuiListItemButton)(() => ({
  '& .MuiListItemText-root span': {
    font: '500 14px/14px Inter, serif',
    color: '#1D2C4B'
  },
  '& p': {
    font: '500 14px/14px Inter, serif',
    color: '#0065FF'
  }
}));

export default ListItemButton;
