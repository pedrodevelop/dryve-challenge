import React from 'react';

import { Typography } from '@material-ui/core';

import Button from './styles';

const companies = [{ id: 1, name: 'DryveOne - Frederico Boeri' }];

function SelectCompany() {
  return (
    <>
      <Button
        id="companyMenu"
        disableRipple
        startIcon={<img alt="" src="/assets/Company.svg" />}
        endIcon={<img alt="" src="/assets/Path.svg" />}
      >
        {companies.map(company => (
          <Typography key={company.id}>{company.name}</Typography>
        ))}
      </Button>
    </>
  );
}

export default SelectCompany;
