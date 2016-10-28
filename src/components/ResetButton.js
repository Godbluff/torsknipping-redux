import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as numbersActions from '../actions/numbersActions';

class ResetButton extends Component {
  constructor(){
    super();
    this.resetNumbers = this.resetNumbers.bind(this);
  }

  // Clears the selected numbers from the store.
  resetNumbers(){
    this.props.dispatch(numbersActions.resetNumbers());
    console.clear();
    console.log('You have no numbers selected');
  }

  render(){
    // DOM output
    return(
      <div className="element-inline bottom-button">
        <button className="button red" onClick={this.resetNumbers}>
          <span className="title">Fjern Alle Tall</span>
          <span className="price glyphicon glyphicon-trash"></span>
        </button>
      </div>
    );
  }
}

ResetButton.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(ResetButton);
