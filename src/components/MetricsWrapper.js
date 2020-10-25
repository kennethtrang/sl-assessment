import React from 'react';
import SalesGraph from './SalesGraph';
import '../styles/MetricsWrapper.css';

const MetricsWrapper = ({ salesGraphData }) => {
  return (
    <div className="metrics-wrapper">
      <SalesGraph salesGraphData={salesGraphData} />
    </div>
  );
};

export default MetricsWrapper;
