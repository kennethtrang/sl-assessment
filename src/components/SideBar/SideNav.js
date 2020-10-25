import React from 'react';
import TAB from '../../data/enums/tabs';

const SideNav = ({ currTab, setCurrTab }) => {
  return (
    <section className="sidenav">
      <button
        type="button"
        name={TAB.overview}
        className={`tab ${currTab === TAB.overview ? 'active' : ''}`}
        onClick={(e) => setCurrTab(e.target.name)}
      >
        <img src="https://sl-assessment.s3-us-west-1.amazonaws.com/home.png" alt="overview" />
        OVERVIEW
      </button>
      <button
        type="button"
        name={TAB.sales}
        className={`tab ${currTab === TAB.sales ? 'active' : ''}`}
        onClick={(e) => setCurrTab(e.target.name)}
      >
        <img src="https://sl-assessment.s3-us-west-1.amazonaws.com/bar-chart.png" alt="bar chart" />
        SALES
      </button>
    </section>
  );
};

export default SideNav;
