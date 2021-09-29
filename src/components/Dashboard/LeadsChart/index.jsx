import React from 'react';

import { Line } from 'react-chartjs-2';

import { Box, CardContent, CardHeader, Divider } from '@material-ui/core';

import Card from './styles';

function LeadsChart() {
  let width;
  let height;
  let gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, '#EAF9FF');
      gradient.addColorStop(1, '#99CDFF');
    }

    return gradient;
  }

  const data = {
    labels: [
      '8/Dez',
      '9/Dez',
      '10/Dez',
      '11/Dez',
      '12/Dez',
      '13/Dez',
      '14/Dez',
      '15/Dez',
      '16/Dez',
      '17/Dez',
      '18/Dez',
      '19/Dez',
      '20/Dez',
      '21/Dez'
    ],
    datasets: [
      {
        label: 'Veículos',
        data: [46, 44, 43, 41, 38, 41, 49, 40, 33, 41, 28, 40, 46, 45],
        borderColor: '#0065FF',
        backgroundColor(context) {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        fill: true,
        borderWidth: 3,
        pointRadius: 4,
        pointBorderColor: '#0065FF'
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { intersect: false }
    },
    maintainAspectRatio: false,
    responsive: true
  };

  return (
    <Card>
      <CardHeader title="Leads (últimos 30 dias)" />
      <Divider />
      <CardContent>
        <Box>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default LeadsChart;
