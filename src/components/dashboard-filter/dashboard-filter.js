import React from 'react';
require('./dashboard-filter.css');
import { DateUtil } from 'utils';
import { DateRange } from '../date-range';

export class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  setScheduledDates({startDate, endDate}) {
    const oldState = this.state.scheduled;
    const scheduled = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate
    };
    this.setState({scheduled});
  }

  focusScheduled(focused) {
    const scheduled = { ...this.state.scheduled, focused };
    this.setState({scheduled});
  }

  setProjectedDates({startDate, endDate}) {
    const oldState = this.state.projected;
    const projected = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate
    };
    this.setState({projected});
  }

  focusProjected(focused) {
    const projected = { ...this.state.projected, focused };
    this.setState({projected});
  }

  render() {
    return (
      <div className="DashboardFilter">
        <span className="vendor autocomplete">Vendor</span>
        <span className="status dropdown">Status</span>
        <span className="scheduled date-range">
          <span className="date-range-title">Scheduled Delivery</span>
          <DateRange
            startDate={ this.state.scheduled.startDate }
            endDate={ this.state.scheduled.endDate }
            startDateId="scheduledStart"
            endDateId="scheduledEnd"
            focusedInput={ this.state.scheduled.focused }
            onDatesChange={ this.setScheduledDates.bind(this) }
            onFocusChange={ this.focusScheduled.bind(this) }
          />
        </span>
        <span className="projected date-range">
          <span className="date-range-title">Projected Delivery</span>
          <DateRange
            startDate={ this.state.projected.startDate }
            endDate={ this.state.projected.endDate }
            startDateId="projectedStart"
            endDateId="projectedEnd"
            focusedInput={ this.state.projected.focused }
            onDatesChange={ this.setProjectedDates.bind(this) }
            onFocusChange={ this.focusProjected.bind(this) }
          />
        </span>
      </div>
    );
  }
}
