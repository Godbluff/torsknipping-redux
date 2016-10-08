import React, { Component } from 'react';
import {connect} from 'react-redux';
import RowListing from './RowListing';

class RowContainer extends Component{
  render(){
    return(
      <div className="jumbotron col-sm-12">
        <RowListing selectRow={this.props.numbers} />
      </div>

    );
  }
}

RowContainer.PropTypes = {
  numbers: React.PropTypes.array.isRequied
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps)(RowContainer);
