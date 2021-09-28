import { styled } from '@material-ui/core/styles';

import MuiButton from '@material-ui/core/Button';

const AppBar = styled(MuiButton)(() => ({
  backgroundColor: '#FFFFFF',
  '& p': {
    textTransform: 'capitalize',
    color: '#1D2C4B',
    font: 'normal 500 14px/14px Inter, serif'
  },
  '&:hover': {
    backgroundColor: '#FFFFFF'
  }
}));

export default AppBar;
