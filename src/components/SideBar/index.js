import React from 'react';
import ItemInfo from './ItemInfo';
import Tags from './Tags';
import SideNav from './SideNav';
import '../../styles/SideBar.css';

const SideBar = ({ image, title, subtitle, tags, currTab, setCurrTab }) => {
  return (
    <div id="sidebar">
      <ItemInfo image={image} title={title} subtitle={subtitle} />
      <Tags tags={tags} />
      <SideNav currTab={currTab} setCurrTab={setCurrTab} />
    </div>
  );
};

export default SideBar;
