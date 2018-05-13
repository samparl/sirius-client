import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './date-range.css';
import { DateRangePicker } from 'react-dates';
import { DateInput } from 'types';

class DateRangeProps extends DateInput {
  onDatesChange: () => {};
  onFocusChange: () => {};
  startDateId: string;
  endDateId: string;
}

export const DateRange: React.SFC<DateRangeProps> = (props) => (
  <DateRangePicker
    startDate={ props.startDate } // momentPropTypes.momentObj or null,
    endDate={ props.endDate } // momentPropTypes.momentObj or null,
    focusedInput={ props.focused } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onDatesChange={ props.onDatesChange } // PropTypes.func.isRequired,
    onFocusChange={ props.onFocusChange } // PropTypes.func.isRequired,
    startDateId={ props.startDateId } // PropTypes.string.isRequired,
    endDateId={ props.endDateId } // PropTypes.string.isRequired,
    />
);
