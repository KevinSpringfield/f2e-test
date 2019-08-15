import React from 'react';
import './index.scss';

export const OrderCaption = (props) => {
  return (
    <div className="order-caption">
      <div className="order-bar"></div>
      <div className="caption-name">{ props.name }</div>
    </div>
  )
}
