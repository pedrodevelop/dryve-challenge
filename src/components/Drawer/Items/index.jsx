import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Link } from '@material-ui/core';
import ListItem from './styles';

function ListItems(props) {
  const router = useRouter();
  const { children, href } = props;

  return (
    <>
      <ListItem
        button
        component={Link}
        href={href}
        selected={href === router.pathname}
        disableRipple
      >
        {children}
      </ListItem>
    </>
  );
}

ListItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string
};

export default ListItems;
