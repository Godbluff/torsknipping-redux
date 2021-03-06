import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Navigation } from 'react-router'
import * as numbersActions from '../actions/numbersActions';
import Checkit from 'checkit';
import ReactGA from 'react-ga';

class CouponFetch extends Component {
  constructor(props){
    super(props);
    this.onFetch = this.onFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkAlert = this.checkAlert.bind(this);
    this.getStats = this.getStats.bind(this);
    this.state = {
      emailValid : false,
      text: '',
      alert: ''
    };
  }

  handleChange(event) {
    let isValid = false;
    let model = {
      email: event.target.value
    };

    const modelChecks = new Checkit({
      email: ['required', 'email']
    });

    let [checkitErr, res] = modelChecks.validateSync(model);
    if(res){
      isValid = true;
      this.checkAlert('');
    }
    if (checkitErr) {
      isValid = false;
      this.checkAlert('Grønn hake til høyre når emailen din er riktig formatert.');
    }

    this.setState({
      text: event.target.value,
      emailValid: isValid
    });
  }

  checkAlert(text){
    this.setState({
      alert: text
    });
  }

  onFetch() {
    this.checkAlert('Hold an litt mens vi graver i arkivet...');
    this.state.emailValid
      ?
        axios({
          method: 'get',
          url: `https://gratislotto-api.herokuapp.com/api/Tickets?filter[where][email]=${this.state.text}`
        })
          .then((response) => {
            delete response.data[0].registeredTimestamp;
            this.props.dispatch(numbersActions.resetNumbers());
            this.props.dispatch(numbersActions.fillNumbers(response.data[0]));
            this.checkAlert('Hværsågod! Tallene er på plass. Antagelig de samme som du lagret.');
            ReactGA.event({
              category: 'Retrieval',
              action: 'Retrieved Numbers'
            });
            this.getStats();
          })
          .catch((error) => {
            this.checkAlert(`Oooha! Oooha! Kjempetryn! Datakræsj og ruskete kode!`);
          })
      : this.checkAlert('Nåja. Må være litt nøyere med epost addressa.');
  }

  getStats(){
    axios({
      method: 'get',
      url: `https://gratislotto-api.herokuapp.com/api/Tickets/${this.props.numbers.id}/statistics?calcStartDate=1985-05-01&calcEndDate=2016-10-10`
    })
      .then((response) => {
        this.props.dispatch(numbersActions.importStats(response.data.statistics));
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(){
    const validClass = "glyphicon glyphicon-remove-circle validate-mail red";
    const invalidClass = "glyphicon glyphicon glyphicon-ok-circle validate-mail green";
    return(
      <div className="fetch-container">
            <input className="form-control mail-input fetch-input"  placeholder="Epost addresse å hente nippetukong for." onChange={this.handleChange} value={this.state.text} type="text"/>
            <button className="button yellow input" onClick={this.onFetch}>
              <span className="title">Hent Kutong</span>
              <span className="price glyphicon glyphicon-log-in"></span>
            </button>
        <div className="errormessage">{this.state.alert}</div>
      </div>
    );
  }
}

CouponFetch.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps)(CouponFetch);
