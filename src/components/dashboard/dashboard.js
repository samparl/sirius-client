import React from 'react';

import { ShipmentService } from 'services';
import { ShipmentCard } from '../shipment-card';
import { SectionHeader } from '../section-header';
import { DashboardSummary } from '../dashboard-summary';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipments: [],
      summary: {}
    };
  }

  componentDidMount() {
    ShipmentService.getShipments()
      .then(shipments => { this.setState({shipments}); });

    ShipmentService.getShipmentsSummary()
      .then(summary => { this.setState({summary}); });
  }

  render() {
    return (
      <div className="Dashboard">
        <SectionHeader title="Dashboard">
          <DashboardSummary { ...this.state.summary }/>
        </SectionHeader>
        <div className="shipments">
          {
            this.state.shipments.map((shipment, index) => <ShipmentCard {...shipment} key={index}/>)
          }
        </div>
      </div>
    );
  }
}
