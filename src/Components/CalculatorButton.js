import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './style.css';

class CalculatorButton extends Component {

  render(props) {
    return (
      <input type= {this.props.buttonText === "=" ? "submit" : "button"} onClick={this.props.handleButtonClick} value= {this.props.buttonText} />
    );
  }
}
export default CalculatorButton;

