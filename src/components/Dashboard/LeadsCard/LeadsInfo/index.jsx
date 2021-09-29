import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Divider,
  ListItemText,
  ListItemIcon,
  Typography
} from '@material-ui/core';

import ListItemButton from './styles';

function LeadsInfo(props) {
  const { logo, name, sales } = props;
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <img alt="" src={`/assets/Logos/logo${logo}.svg`} />
        </ListItemIcon>
        <ListItemText>
          <Box>{name}</Box>
        </ListItemText>
        <Typography>{sales}</Typography>
      </ListItemButton>
      <Divider variant="middle" />
    </>
  );
}

LeadsInfo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  sales: PropTypes.string
};

export default LeadsInfo;
