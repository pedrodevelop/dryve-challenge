import { styled } from '@material-ui/core/styles';

import MuiList from '@material-ui/core/List';

const List = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(3, 3, 0)
}));

export default List;
