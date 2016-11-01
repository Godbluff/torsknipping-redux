import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Checkit from 'checkit';
import * as numbersActions from '../actions/numbersActions';

const Chance = require('chance');
const chance = new Chance();

const SubmissionForm = React.createClass({
  propTypes: {
    numbers: React.PropTypes.object.isRequired,
    className: React.PropTypes.string,
    dispatch: React.PropTypes.func
  },

  getInitialState(){
    return {
      emailValid : false,
      text: '',
      alert: "",
      incomplete: ''
    };
  },

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
      this.props.dispatch(numbersActions.updateEmail(event.target.value));
    }
    if (checkitErr) {
      isValid = false;
      this.checkAlert('Grønn hake til høyre når emailen din er riktig formatert.');
    }

    this.setState({
      text: event.target.value,
      emailValid: isValid
    });
  },

  postNumbers(){
    this.checkAlert('Sender tall. Det jobbes på spreng. Vent litt...');
    //Validate rows.
    const validRows = [];
    const incompleteRows = [];
    for(let i = 1; i <= 10; i++) {
      let rowname = 'row' + i;
      this.props.numbers[rowname].length === 7
      ? (validRows.push(
        this.props.numbers[rowname]
      ))
      : this.props.numbers[rowname].length > 0 && incompleteRows.push(i);
    }

    incompleteRows.length > 0
      ? this.setState({
          incomplete: 'Rekke ' + incompleteRows + ' er ikke komplett med syv tall. Det liksom det som er vitsen.'
      })
      : this.setState({
          incomplete: ''
      });

    // Abort submission if there are incomplete rows.
    if(incompleteRows > 0){this.checkAlert('');return;}

    // Check validity and initiate post.
    validRows.length >= 1
        ? this.state.emailValid === true
          ? axios({
          method: 'post',
          url: 'http://gratislotto-api.herokuapp.com/api/Tickets',
          data:
            this.props.numbers
          })
          .then((response) => {
            this.checkAlert('Der var talla lagret. Lykke til.');
            console.log(response.statusText);
          })
          .catch((error) => {
            this.checkAlert('Jøye meg! Her gikk det skikkelig skeis. Prøv igjen.');
            console.log(error);
          })
          : this.checkAlert('Manger en e-post addresse. Kommer ikke langt uten nå til dags.')
        : this.checkAlert('Ekke nok tall, da vettu. Sju stykker må til.');
  },

  checkAlert(text){
    this.setState({
      alert: text
    });
  },

  render(){
    const validClass = "glyphicon glyphicon-remove-circle validate-mail red";
    const invalidClass = "glyphicon glyphicon glyphicon-ok-circle validate-mail green";

    //DOM output of array
    return(

    <div className="fetch-container">
      <input className="form-control mail-input fetch-input"  placeholder="Epost addresse å hente nippetukong for." onChange={this.handleChange} value={this.state.text} type="text"/>
      <button className="button yellow input" onClick={this.postNumbers}>
        <span className="title">Send Kutong</span>
        <span className="price glyphicon glyphicon-save"></span>
      </button>
      <div className="errormessage">{this.state.alert}<br/>{this.state.incomplete}</div>
  </div>
    );
  }
});

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps)(SubmissionForm);
