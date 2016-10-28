import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RowListing from '../containers/RowListing';

const DummyResult = {
  1: [3,7,8,16,21,28,33,11],
  2: [2,6,12,15,17,28,32,22]
};

const ThisWeek = () => (
  <div className="top-result">
    <RowListing selectRow={DummyResult[1]}/>
    <Link to="/stats"><button className="statslink">Se statistikk</button></Link>

  </div>
);

export default ThisWeek;

