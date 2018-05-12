import React from 'react';
import { DateRange } from '../date-range';
import './dashboard-filter.css';

export class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: '',
      status: '',
      scheduled: {
        startDate: null,
        endDate: null,
        focused: null,
      },
      projected: {
        startDate: null,
        endDate: null,
        focused: null,
      }
    };
  }

  setScheduledDates({ startDate, endDate }) {
    const oldState = this.state.scheduled;
    const scheduled = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate,
    };
    this.setState({ scheduled });
  }

  setProjectedDates({ startDate, endDate }) {
    const oldState = this.state.projected;
    const projected = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate,
    };
    this.setState({ projected });
  }

  focusScheduled(focused) {
    const scheduled = { ...this.state.scheduled, focused };
    this.setState({ scheduled });
  }

  focusProjected(focused) {
    const projected = { ...this.state.projected, focused };
    this.setState({ projected });
  }

  render() {
    return (
      <div className="DashboardFilter">
        <span className="inputs">
          <span className="vendor autocomplete filter-option">
            <span className="label">Vendor</span>
            <input className="filter-input"
              onChange={ e => this.setState({ vendor: e.target.value }) }
              value={ this.state.vendor } />
          </span>
          <span className="status dropdown filter-option">
            <span className="label">Status</span>
            <input className="filter-input"
              onChange={ e => this.setState({ status: e.target.value }) }
              value={ this.state.status } />
          </span>
        </span>
        <span className="dates">
          <span className="scheduled date-range filter-option">
            <span className="label">Scheduled Delivery</span>
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
          <span className="projected date-range filter-option">
            <span className="label">Projected Delivery</span>
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
        </span>
      </div>
    );
  }
}
