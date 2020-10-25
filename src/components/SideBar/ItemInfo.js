import React from 'react';

const ItemInfo = ({ image, title, subtitle }) => (
  <section className="item-info">
    <img src={image} alt="item" />
    <h4>{title}</h4>
    <p>{subtitle}</p>
  </section>
);

export default ItemInfo;
