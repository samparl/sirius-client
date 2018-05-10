import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export const DateRange = (props) => (
  <DateRangePicker
    startDate={ props.startDate } // momentPropTypes.momentObj or null,
    startDateId={ props.startDateId } // PropTypes.string.isRequired,
    endDate={ props.endDate } // momentPropTypes.momentObj or null,
    endDateId={ props.endDateId } // PropTypes.string.isRequired,
    onDatesChange={ props.onDatesChange } // PropTypes.func.isRequired,
    focusedInput={ props.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    onFocusChange={ props.onFocusChange } // PropTypes.func.isRequired,
    />
);
