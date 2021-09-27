import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './styles';

function ListItems(props) {
  const { children } = props;

  return (
    <>
      <ListItem button>{children}</ListItem>
    </>
  );
}

ListItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ListItems;
