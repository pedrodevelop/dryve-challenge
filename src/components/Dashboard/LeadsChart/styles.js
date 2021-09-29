import { styled } from '@material-ui/core/styles';

import MuiCard from '@material-ui/core/Card';

const Card = styled(MuiCard)(() => ({
  boxShadow: 'none',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  height: '264px',
  '& .MuiCardHeader-content span': {
    color: '#1D2C4B',
    font: '500 14px/14px Inter, serif'
  }
}));

export default Card;
