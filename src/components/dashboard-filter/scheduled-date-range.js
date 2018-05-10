import React from 'react';
import { DateUtil } from 'utils';
import { DateRange } from '../date-range';
export class ScheduledDateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null
    };
  }

  render() {
    return (
      <DateRange
        startDate={ this.props.startDate } // momentPropTypes.momentObj or null,
        startDateId="start" // PropTypes.string.isRequired,
        endDate={ this.props.endDate } // momentPropTypes.momentObj or null,
        endDateId="end" // PropTypes.string.isRequired,
        onDatesChange={ this.props.onDatesChange } // PropTypes.func.isRequired,
        focusedInput={ this.state.focused }
        onFocusChange={ focused => this.setState({focused}) }
        />
    );
  }
}
