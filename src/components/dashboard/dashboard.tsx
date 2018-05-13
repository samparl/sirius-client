import * as React from 'react';

import { DashboardType } from 'types';
import { ShipmentService } from 'services';
import { SectionHeader, Pagination } from 'components';
import {
  ShipmentCard, 
  DashboardSummary,
  DashboardFilter,
} from './components';

export class Dashboard extends React.Component<null, DashboardType> {
  constructor(props: any) {
    super(props);
    this.state = new DashboardType();
  }

  componentDidMount() {
    this.getPage(0);
    this.getShipmentsSummary();
  }

  onPageChange(data: any) {
    this.getPage(data.selected);
  }

  getPage(page: any) {
    ShipmentService.getShipments(page)
      .then((response: any) => {
        this.setState({
          shipments: JSON.parse(response.shipments),
          total_pages: response.total_pages
        });
      });
  }

  getShipmentsSummary() {
    ShipmentService.getShipmentsSummary()
      .then((summary: any) => {
        this.setState({ summary });
      });
  }

  onClick(shipment: any, e: any) {
    console.log({shipment});
  }

  render() {
    return (
      <div className="Dashboard">
        <SectionHeader title="Dashboard">
          <DashboardSummary { ...this.state.summary }/>
        </SectionHeader>
        <DashboardFilter />
        <div className="shipments">
          {
            this.state.shipments.map((shipment: any, index: any) => <ShipmentCard {...shipment} key={index} onClick={ this.onClick.bind(this, shipment) } />)
          }
        </div>
        <Pagination
          onPageChange={ this.onPageChange.bind(this) }
          pageCount={ this.state.total_pages } />
      </div>
    );
  }
}
