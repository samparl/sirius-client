import React from 'react';
import { DateUtil } from 'utils';
import { ScheduledDateRange } from './scheduled-date-range';

export class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null
    };
  }

  render() {
    return (
      <div className="DashboardFilter">
        <span className="vendor autocomplete">Vendor</span>
        <span className="status dropdown">Status</span>
        <span className="scheduled date-range">
          <ScheduledDateRange
            startDate={ this.state.start }
            endDate={ this.state.end }
            onDatesChange={ ({ startDate, endDate }) => { this.setState({ startDate, endDate }); } }
            />
        </span>
        <span className="projected date-range">Projected</span>
      </div>
    );
  }
}
