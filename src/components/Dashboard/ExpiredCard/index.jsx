import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Chip,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

function ExpiredCard(props) {
  const {
    brandName,
    expiredTime,
    fuel,
    image,
    name,
    manufcYear,
    mileage,
    modelName,
    modelYear,
    price
  } = props;
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <img alt="" src={`${image}`} width={96} height={72} />
        </ListItemIcon>
        <ListItemText>
          <Box pl={2} className="carInfos">
            <Box>
              <Typography variant="span">
                {`${brandName} ${modelName} `}
              </Typography>
            </Box>
            <Box>
              <Typography>{name}</Typography>
            </Box>
            <Box>
              <Typography>{`${manufcYear} / ${modelYear} • ${fuel}`}</Typography>
            </Box>
            <Box>
              <Typography>
                {`${mileage} km •`}
                <Typography className="carPrice" variant="span">
                  {`R$ ${price}`}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </ListItemText>
        <Box className="carStatus">
          <Chip label="Vencido" size="small" color="warning" />
          <Typography mt={1}>
            {expiredTime > 1
              ? `Há ${expiredTime} dias`
              : `Há ${expiredTime} dia`}
          </Typography>
        </Box>
      </ListItemButton>
      <Divider variant="middle" />
    </>
  );
}

ExpiredCard.propTypes = {
  brandName: PropTypes.string,
  expiredTime: PropTypes.number,
  fuel: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  manufcYear: PropTypes.number,
  mileage: PropTypes.number,
  modelName: PropTypes.string,
  modelYear: PropTypes.number,
  price: PropTypes.number
};

export default ExpiredCard;
