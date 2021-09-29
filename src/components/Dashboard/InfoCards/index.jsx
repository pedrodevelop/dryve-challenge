import React from 'react';

import PropTypes from 'prop-types';

import {
  Box,
  CardHeader,
  CardContent,
  Grid,
  IconButton
} from '@material-ui/core';

import Card from './styles';

import getIcon from '../../GetIcon';

function InfoCard(props) {
  const { title, value, icon } = props;

  return (
    <Grid item xs={3}>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Box>{value}</Box>
          <IconButton disabled>{getIcon(icon)}</IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string
};

export default InfoCard;
