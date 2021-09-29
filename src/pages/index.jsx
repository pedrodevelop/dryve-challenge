import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import { CardHeader, Divider, List, Grid, Typography } from '@material-ui/core';

import InfoCards from '../components/Dashboard/InfoCards';
import LeadsChart from '../components/Dashboard/LeadsChart';
import LeadsCard from '../components/Dashboard/LeadsCard';
import LeadsInfo from '../components/Dashboard/LeadsCard/LeadsInfo';
import ExpiredCard from '../components/Dashboard/ExpiredCard';
import ScheduledCard from '../components/Dashboard/ScheduledCard';

import Card from '../components/Dashboard/ExpiredCard/styles';

const infoCards = [
  { title: 'Veículos publicados', value: '26', icon: 'vehicle' },
  { title: 'Preço médio', value: 'R$ 41.5K', icon: 'pricetag' },
  { title: 'Km médio', value: '68.800 km', icon: 'mileage' },
  { title: 'Idade média do estoque', value: '4 anos', icon: 'calendar' }
];

const leadsInfo = [
  { logo: 'Olx', name: 'OLX', sales: '40' },
  { logo: 'Webmotors', name: 'Webmotors', sales: '29' },
  { logo: 'Icarros', name: 'Icarros', sales: '18' },
  { logo: 'Autoline', name: 'Autoline', sales: '7' },
  { logo: 'Mercadolivre', name: 'Mercado Livre', sales: '5' }
];

function DashBoard(props) {
  const { response } = props;
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main>
        <Typography
          paragraph
          sx={{ font: '600 24px/24px Inter, serif', color: '#1D2C4B' }}
          variant="h4"
        >
          Resumo
        </Typography>
        <Grid container spacing={3}>
          {infoCards.map(card => (
            <InfoCards
              key={card.title}
              title={card.title}
              value={card.value}
              icon={card.icon}
            />
          ))}
          <Grid item xs={9}>
            <LeadsChart />
          </Grid>
          <Grid item xs={3}>
            <LeadsCard>
              {leadsInfo.map(company => (
                <LeadsInfo
                  key={company.name}
                  logo={company.logo}
                  name={company.name}
                  sales={company.sales}
                />
              ))}
            </LeadsCard>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardHeader title="Test-drives vencidos" />
              <Divider />
              <List style={{ overflow: 'scroll' }}>
                {response.map(data => (
                  <ExpiredCard
                    key={data.vehicle_uuid}
                    brandName={data.brand_name}
                    expiredTime={Math.floor(Math.random() * (30 - 1 + 1)) + 1}
                    fuel={data.fuel_type}
                    image={data.image}
                    name={data.version_name}
                    manufcYear={data.manufacturing_year}
                    mileage={data.mileage}
                    modelName={data.model_name}
                    modelYear={data.model_year}
                    price={(data.ad_selling_price / 1000).toFixed(3)}
                  />
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardHeader title="Test-drives do dia" />
              <Divider />
              <List style={{ overflow: 'scroll' }}>
                {response.map(data => (
                  <ScheduledCard
                    key={data.vehicle_uuid}
                    brandName={data.brand_name}
                    fuel={data.fuel_type}
                    image={data.image}
                    name={data.version_name}
                    manufcYear={data.manufacturing_year}
                    mileage={data.mileage}
                    modelName={data.model_name}
                    modelYear={data.model_year}
                    price={(data.ad_selling_price / 1000).toFixed(3)}
                  />
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

DashBoard.getInitialProps = async () => {
  const res = await fetch('http://www.mocky.io/v2/5eb553df31000060006994a8');
  const json = await res.json();
  return { response: json };
};

DashBoard.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DashBoard;
