import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RowListing from '../containers/RowListing';

const DummyResult = {
  1: [3,7,8,16,21,28,33,11],
  2: [2,6,12,15,17,28,32,22]
};

const ThisWeek = (props) => (
  <div className="top-result">
    <div>
      <div className="element-inline" style={{'paddingRight': '5px', 'paddingLeft': '5px', 'color': 'black'}}><h5>Ukens tall:</h5></div>
      <RowListing selectRow={DummyResult[1]}/>
    </div>
    <Link to={props.link}><button className="statslink button green col-sm-4">{props.linkText}</button></Link>
  </div>
);

export default ThisWeek;

