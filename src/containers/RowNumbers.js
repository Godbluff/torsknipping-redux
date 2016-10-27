import React, {Component} from 'react';

class RowNumbers extends Component {

  render(){
    return(
      <div className="stage">
        <div className={this.props.className} key={this.props.number}>
          <span className="shadow"></span>
          <p>{this.props.number}</p>
        </div>
      </div>
    );
  }
}

export default RowNumbers;
