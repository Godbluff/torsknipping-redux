import React, { Component } from 'react';
import NumbersContainer from '../containers/NumbersContainer';
import '../styles/styles.css';
import ResetButton from '../components/ResetButton';
import SubmissionForm from '../components/SubmissionForm';
import AutoFill  from '../components/AutoFill';
import Head from '../containers/Head';
import ChartContainer from '../containers/ChartContainer';
import Results from '../components/Results';

class TippApp extends Component{

  render(){
    return(
      <div className="col-sm-12 no-pad">
        <Head />
        {this.props.children}
      </div>
    );
  }
}

export default TippApp;
