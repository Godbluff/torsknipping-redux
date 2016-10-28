import React, { Component } from 'react';
import '../styles/styles.css';
import ChartContainer from '../containers/ChartContainer';
import Results from '../components/Results';
import { Link } from 'react-router';

class Stats extends Component {
  render() {
    return (
    <div className="col-sm-12 jumbotron">
      <Link to="/"><button>Tilbake til Nippetukongen</button></Link>
      <ChartContainer />
      <Results/>

    </div>
    );
  }
}

export default Stats;
