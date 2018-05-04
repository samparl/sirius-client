import React from 'react';
require('./dashboard-summary.css');

export const DashboardSummary = (props) => (
  <span className="DashboardSummary">
    <div className="summary-categories">
      <span className="summary-category on-time">
        <span className="summary-category-title">
          On Time
        </span>
        <span className="summary-category-value">
          { props.on_time }
        </span>
      </span>
      <span className="summary-category late">
        <span className="summary-category-title">
          Late
        </span>
        <span className="summary-category-value">
          { props.late }
        </span>
      </span>
      <span className="summary-category very-late">
        <span className="summary-category-title">
          Very Late
        </span>
        <span className="summary-category-value">
          { props.very_late }
        </span>
      </span>
    </div>
  </span>
);
