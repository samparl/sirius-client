import React from 'react';
require('./shipment-card.css');

export const ShipmentCard = (props) => {
  const late = props.scheduled_delivery < props.projected_delivery ?
  ' late' : '';
  const className = `ShipmentCard` + late;
  return (
    <div className={ className }>
      <div className="ShipmentCard-header">
        <div className="ShipmentCard-id">Shipment Id: {props.id}</div>
        <span className="scheduled-date">
          <span>
            Scheduled Delivery:
          </span>
          <span className="ShipmentCard-date">
            { new Date(props.scheduled_delivery).toDateString() }
          </span>
        </span>
        <span className="projected-date">
          <span>
            Projected Delivery:
          </span>
          <span className="ShipmentCard-date">
            { new Date(props.projected_delivery).toDateString() }
          </span>
        </span>
      </div>

      <div className="ShipmentCard-info">
        <div className="vendor-name">
          Vendor: {props.vendor.name}
        </div>
        <div className={`ShipmentCard-status ${props.status}`}>
          Status: {props.status}
        </div>
      </div>
    </div>
  );
};
