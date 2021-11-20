import React, { memo } from 'react';
import './styles.css';

export const Loader = memo(() => (
  <div className="box">
    <div id="loader-wrapper">
      <div id="loader"/>
      <div className="loader-section section-left"/>
      <div className="loader-section section-right"/>
    </div>
  </div>
));
