import { styled } from '@material-ui/core/styles';

import MuiCard from '@material-ui/core/Card';

const Card = styled(MuiCard)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: 'none',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  '& .MuiCardHeader-content span': {
    color: '#1D2C4B',
    font: '500 14px/14px Inter, serif'
  },
  '& .MuiCardContent-root ': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#1D2C4B',
    font: '400 30px/30px Inter, serif'
  },
  '& path': {
    stroke: '#0065FF'
  },
  '& .Mui-disabled': {
    backgroundColor: '#F7F7F7'
  }
}));

export default Card;
