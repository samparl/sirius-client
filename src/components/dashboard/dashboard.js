import React from 'react';

import { ShipmentService } from 'services';
import { ShipmentCard } from '../shipment-card';
import { SectionHeader } from '../section-header';
import { DashboardSummary } from '../dashboard-summary';
import { Pagination } from '../pagination';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipments: [],
      summary: {}
    };
  }

  componentDidMount() {
    this.getPage(0);
    this.getShipmentsSummary();
  }

  onPageChange(data) {
    this.getPage(data.selected);
  }

  getPage(page) {
    ShipmentService.getShipments(page)
      .then(response => {
        this.setState({
          shipments: JSON.parse(response.shipments),
          total_pages: response.total_pages
        });
      });
  }

  getShipmentsSummary() {
    ShipmentService.getShipmentsSummary()
      .then(summary => {
        this.setState({ summary });
      });
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
        <Pagination
          onPageChange={ this.onPageChange.bind(this) }
          pageCount={ this.state.total_pages } />
      </div>
    );
  }
}
