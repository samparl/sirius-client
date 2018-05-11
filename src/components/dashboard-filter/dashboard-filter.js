import React from 'react';
require('./dashboard-filter.css');
import { DateUtil } from 'utils';
import { DateRange } from '../date-range';

export class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: '',
      status: '',
      scheduled: {
        startDate: null,
        endDate: null,
        focused: null
      },
      projected: {
        startDate: null,
        endDate: null,
        focused: null
      }
    };
  }

  setScheduledDates({ startDate, endDate }) {
    const oldState = this.state.scheduled;
    const scheduled = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate
    };
    this.setState({ scheduled });
  }

  focusScheduled(focused) {
    const scheduled = { ...this.state.scheduled, focused };
    this.setState({scheduled});
  }

  setProjectedDates({ startDate, endDate }) {
    const oldState = this.state.projected;
    const projected = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate
    };
    this.setState({ projected });
  }

  focusProjected(focused) {
    const projected = { ...this.state.projected, focused };
    this.setState({ projected });
  }

  render() {
    return (
      <div className="DashboardFilter">
        <span className="vendor autocomplete">
          <span className="vendor-label">Vendor</span>
          <input
            onChange={ e => this.setState({ vendor: e.target.value }) }
            value={ this.state.vendor } />
        </span>
        <span className="status dropdown">
          <span className="status-label">Status</span>
          <input
            onChange={ e => this.setState({ status: e.target.value }) }
            value={ this.state.status } />
        </span>
        <span className="scheduled date-range">
          <span className="date-range-label">Scheduled Delivery</span>
          <DateRange
            startDateId="scheduledStart"
            startDate={ this.state.scheduled.startDate }
            endDateId="scheduledEnd"
            endDate={ this.state.scheduled.endDate }
            onDatesChange={ this.setScheduledDates.bind(this) }
            onFocusChange={ this.focusScheduled.bind(this) }
            focusedInput={ this.state.scheduled.focused }
          />
        </span>
        <span className="projected date-range">
          <span className="date-range-label">Projected Delivery</span>
          <DateRange
            startDateId="projectedStart"
            startDate={ this.state.projected.startDate }
            endDateId="projectedEnd"
            endDate={ this.state.projected.endDate }
            onDatesChange={ this.setProjectedDates.bind(this) }
            onFocusChange={ this.focusProjected.bind(this) }
            focusedInput={ this.state.projected.focused }
          />
        </span>
      </div>
    );
  }
}
