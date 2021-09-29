import React from 'react';
import PropTypes from 'prop-types';

import { CardHeader, List } from '@material-ui/core';

import Card from './styles';

function LeadsCard(props) {
  const { children } = props;
  return (
    <Card>
      <CardHeader title="Leads por portal (últimos 30 dias)" />
      <List style={{ overflow: 'scroll' }}>{children}</List>
    </Card>
  );
}

LeadsCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default LeadsCard;
