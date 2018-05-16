import * as React from 'react';
import './spinner.css';

export class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner-background">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
}