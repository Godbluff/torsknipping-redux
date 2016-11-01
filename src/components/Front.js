import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/styles.css';

class Front extends Component {
  render() {
    return (
      <div className="front-bg">
        <div className="head-logo"></div>
        <div className="front-desc">Torsk Nipping ønsker alle spillegale velkommen. Her kan det spilles vilt og hemningsløst uten noen kontroll overhodet. Her er det dog ingen penger og tjene, men til gjengjeld kan det heller ikke tapes noen penger.<br/>Vi gjør alt dette for gøy.<br/><br/>Under kan du gå inn og spille vårt første spill: Gratis-Lotto.</div>
        <div className="button-game">
          <div><Link to="main"><button className="button green title">Spill Gratis-Lotto!</button></Link></div>
        </div>
      </div>
    );
  }
}

export default Front;

//TODO Proper description and professional layout.
