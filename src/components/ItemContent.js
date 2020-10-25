import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Overview from './Overview';
import MetricsWrapper from './MetricsWrapper';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';
import TAB from '../data/enums/tabs';
import '../styles/ItemContent.css';

const ItemContent = ({ selectedItem, getItem }) => {
  const [currTab, setCurrTab] = useState(TAB.overview);

  // getItem would get dispatched from a search or dropdown selector 
  // with different item options rather than this useEffect 
  useEffect(() => {
    getItem('Shark Ninja');
  }, []);

  const { image, title, subtitle, tags } = selectedItem.details;
  const { salesGraphData } = selectedItem;

  if (selectedItem.isLoading) return <Loader />;
  if (selectedItem.error)
    return <ErrorMsg message={selectedItem.errorMessage} />;

  return (
    <div id="item-content">
      <SideBar
        image={image}
        title={title}
        subtitle={subtitle}
        tags={tags}
        currTab={currTab}
        setCurrTab={setCurrTab}
      />
      {currTab === TAB.overview && <Overview />}
      {currTab === TAB.sales && <MetricsWrapper salesGraphData={salesGraphData} />}
    </div>
  );
};

export default ItemContent;
