import React from 'react';
require('./section-header.css');

export const SectionHeader = (props) => (
  <div className="SectionHeader">
    <span className="section-title">{ props.title }</span>
    { props.children }
  </div>
);
