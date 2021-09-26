import { styled } from '@material-ui/core/styles';

import MuiAppBar from '@material-ui/core/AppBar';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

export default AppBar;
