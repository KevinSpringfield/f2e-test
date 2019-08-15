import './index.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const OrderCard = (props) => {
   if (props.state === 'processing') {
    return (
      <div className="order-card">
        <img className="logo" src={ props.logo } alt=""/>
        <div className="info-block">
          <div className="status-row">
            <div className="order-status active">{ props.status }</div>
            <div className="order-date">預計出貨 : { props.date }</div>
          </div>
          <div className="name-row">{ props.name }</div>
        </div>
        <div className="arrow-block">
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="order-card">
        <img className="logo gray" src={ props.logo } alt=""/>
        <div className="info-block">
          <div className="status-row">
            <div className="order-status">{ props.status }</div>
          </div>
          <div className="name-row">{ props.name }</div>
        </div>
        <div className="arrow-block">
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
      </div>
    )
  }
}
