import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesGraph = ({ salesGraphData }) => {
  const { dates, retailSales, wholesaleSales } = salesGraphData;

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Retail',
        data: retailSales,
        fill: false,
        borderColor: 'rgba(72, 168, 243)',
        pointRadius: 0,
      },
      {
        label: 'Wholesale',
        data: wholesaleSales,
        fill: false,
        borderColor: 'rgb(153, 164, 189)',
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: { month: 'MMM' },
            unit: 'month',
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: 'rgb(255, 255, 255)',
            zeroLineColor: 'rgb(235, 235, 235)',
          },
        },
      ],
    },
  };

  return (
    <div className="sales-graph">
      <header>
        <h4 className="graph-title">Sales</h4>
      </header>
      <section className="graph-content">
        <Line data={data} options={options} />
      </section>
    </div>
  );
};

export default SalesGraph;
