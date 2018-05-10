import React from 'react';

export class DashboardFilter extends React.Component {
  render() {
    return (
      <div className="DashboardFilter">
        <span className="vendor autocomplete">Vendor</span>
        <span className="status dropdown">Status</span>
        <span className="scheduled date-range">Scheduled</span>
        <span className="projected date-range">Projected</span>
      </div>
    );
  }
}
