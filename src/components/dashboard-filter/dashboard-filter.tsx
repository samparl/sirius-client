import * as React from 'react';
import './dashboard-filter.css';
import { DateInput } from 'types';
import { DateRange } from '../date-range';
import { FilterDropdown } from '../filter-dropdown';

class DashboardFilterState {
  vendor: any;
  status: string;
  scheduled: DateInput;
  projected: DateInput;

  constructor() {
    this.vendor = '';
    this.status = '';
    this.scheduled = new DateInput();
    this.projected = new DateInput();
  }
}

export class DashboardFilter extends React.Component<null, DashboardFilterState> {
  constructor(props: any) {
    super(props);
    this.state = new DashboardFilterState();
  }

  setScheduledDates({ startDate, endDate }: DateInput) {
    const oldState = this.state.scheduled;
    const scheduled = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate,
    };
    this.setState({ scheduled });
  }

  setProjectedDates({ startDate, endDate }: DateInput) {
    const oldState = this.state.projected;
    const projected = {
      ...oldState,
      startDate: startDate || oldState.startDate,
      endDate: endDate || oldState.endDate,
    };
    this.setState({ projected });
  }

  focusScheduled(focused: any) {
    const scheduled = { ...this.state.scheduled, focused };
    this.setState({ scheduled });
  }

  focusProjected(focused: any) {
    const projected = { ...this.state.projected, focused };
    this.setState({ projected });
  }

  onSelectStatus(option: any) {
    this.setState({ status: option })
  }

  render() {
    const options = [{ name: 'Pending' }, { name: 'Shipped' }, { name: 'Failed' }, { name: 'Delivered' }];
    return (
      <div className="DashboardFilter">
        <span className="inputs">
          <span className="vendor autocomplete filter-option">
            <span className="label">Vendor</span>
            <input className="filter-input"
              onChange={ e => this.setState({ vendor: e.target.value }) }
              value={ this.state.vendor && this.state.vendor } />
          </span>
          <span className="status dropdown filter-option">
            <span className="label">Status</span>
            <FilterDropdown options={ options } onSelect={ this.onSelectStatus.bind(this) } />
          </span>
        </span>
        <span className="dates">
          <span className="projected date-range filter-option">
            <span className="label">Projected Delivery</span>
            <DateRange
              startDateId="projectedStart"
              endDateId="projectedEnd"
              startDate={ this.state.projected.startDate }
              endDate={ this.state.projected.endDate }
              onDatesChange={ this.setProjectedDates.bind(this) }
              onFocusChange={ this.focusProjected.bind(this) }
              focused={ this.state.projected.focused }
            />
          </span>
          <span className="scheduled date-range filter-option">
            <span className="label">Scheduled Delivery</span>
            <DateRange
              startDateId="scheduledStart"
              endDateId="scheduledEnd"
              startDate={ this.state.scheduled.startDate }
              endDate={ this.state.scheduled.endDate }
              onDatesChange={ this.setScheduledDates.bind(this) }
              onFocusChange={ this.focusScheduled.bind(this) }
              focused={ this.state.scheduled.focused }
            />
          </span>
        </span>
      </div>
    );
  }
}
