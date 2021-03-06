import React, { Component } from 'react';
import {connect} from 'react-redux';
import RowListing from './RowListing';

class RowContainer extends Component{

  render(){
    // console.log('Passing ' + this.props.numbers + ' to update selected list');
    return(
      <div className="col-sm-12">
        <RowListing selectRow={this.props.numbers}/>
      </div>

    );
  }
}

RowContainer.propTypes = {
  numbers: React.PropTypes.array.isRequied
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers.row0
  };
}

export default connect(mapStateToProps)(RowContainer);
