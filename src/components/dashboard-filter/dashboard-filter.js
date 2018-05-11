import React from 'react';
import { DateUtil } from 'utils';
import { DateRange } from '../date-range';

export class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduled: {
        start: null,
        end: null,
        focused: null
      },
      projected: {
        start: null,
        end: null,
        focused: null
      }
    };
  }

  setScheduledDates(scheduled) {
    this.setState(scheduled);
  }

  focusScheduled(focused) {
    console.log({focused});
    const scheduled = { ...this.state.scheduled, focused };
    this.setState({scheduled});
  }

  setProjectedDates(projected) {
    this.setState(projected);
  }

  focusProjected(focused) {
    console.log({focused});
    const projected = { ...this.state.projected, focused };
    this.setState({projected});
  }

  render() {
    return (
      <div className="DashboardFilter">
        <span className="vendor autocomplete">Vendor</span>
        <span className="status dropdown">Status</span>
        <span className="scheduled date-range">
          <DateRange className="scheduled"
            startDate={ this.state.start }
            endDate={ this.state.end }
            focusedInput={ this.state.scheduled.focused }
            onDatesChange={ this.setScheduledDates.bind(this) }
            onFocusChange={ this.focusScheduled.bind(this) }
          />
        </span>
        <span className="projected date-range">
          <DateRange className="projected"
            startDate={ this.state.start }
            endDate={ this.state.end }
            focusedInput={ this.state.projected.focused }
            onDatesChange={ this.setProjectedDates.bind(this) }
            onFocusChange={ this.focusProjected.bind(this) }
          />
        </span>
      </div>
    );
  }
}
