import { styled } from '@material-ui/core/styles';

import MuiCard from '@material-ui/core/Card';

const Card = styled(MuiCard)(() => ({
  boxShadow: 'none',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  height: '344px',
  maxHeight: '344px',
  '& .MuiList-root': {
    height: '310px'
  },
  '& .MuiCardHeader-content span': {
    color: '#1D2C4B',
    font: '500 14px/14px Inter, serif'
  },
  '& .MuiListItemButton-root': {
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'row'
  },
  '& .MuiListItemIcon-root img': {
    borderRadius: '4px'
  },
  '& .MuiListItemText-root': {
    flexDirection: 'column'
  },
  '& hr': {
    borderColor: '#EFEFEF'
  },
  '& .carInfos span': {
    color: '#1D2C4B',
    font: '600 12px/12px Inter, serif'
  },
  '& .carInfos p': {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3px',
    color: '#1D2C4B',
    font: '400 12px/12px Inter, serif'
  },
  '& .carStatus': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '& .carStatus p': {
    color: '#666666',
    font: '400 12px/12px Inter, serif'
  },
  '& span.carPrice': {
    marginLeft: '2px',
    color: '#0065FF',
    font: '600 12px/12px Inter, serif'
  }
}));

export default Card;
