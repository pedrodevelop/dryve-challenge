import { styled } from '@material-ui/core/styles';

import MuiListItem from '@material-ui/core/ListItem';

const ListItem = styled(MuiListItem)(({ theme }) => ({
  backgroundColor: '#0065FF',
  borderRadius: 6,
  color: '#FFFFFF',
  height: 40,
  marginBottom: theme.spacing(1)
}));

export default ListItem;
