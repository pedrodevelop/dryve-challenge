import { styled } from '@material-ui/core/styles';

import MuiAppBar from '@material-ui/core/AppBar';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
  zIndex: theme.zIndex.drawer + 1,
  '& .MuiSvgIcon-root': {
    color: '#1D2C4B'
  },
  '& .userProfile': {
    padding: theme.spacing(0.5),
    border: '1.5px solid #0065FF'
  }
}));

export default AppBar;
