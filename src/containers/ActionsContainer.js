import React, { Component } from 'react';
import '../styles/styles.css';
import ResetButton from '../components/ResetButton';
import SubmissionForm from '../components/SubmissionForm';
import AutoFill  from '../components/AutoFill';

class ActionsContainer extends Component {
  render(){
      return(
        <div className="actions text-center">
          <AutoFill />
          <ResetButton />
          <SubmissionForm /><br/>
          <div className="disclaimer">Torsk Nippings Gratis-Lotto er et produkt av ironisk distanse og teknisk nysjerrighet.<br/> De som må føle at tær er tråkket på henvises til nærmeste skobutikk.</div>
        </div>
      )
  }
}

export default ActionsContainer;
