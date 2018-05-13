import * as React from 'react';
require('./section-header.css');

interface SectionHeaderProps {
  title: string;
  children: React.ReactNode
}

export const SectionHeader: React.SFC<SectionHeaderProps> = (props) => (
  <div className="SectionHeader">
    <span className="section-title">{ props.title }</span>
    { props.children }
  </div>
);
