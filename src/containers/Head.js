import React from 'react';
import { Link } from 'react-router';
import CouponFetch from '../components/CouponFetch';

const Head = () => (
  <div className="head-nav">
    <Link to="/"><div className="torsknipping-logo"></div></Link>
    <div className="gratislotto-header">Gratis-Lotto</div>
    <CouponFetch />
  </div>
);

export default Head;
