import React, { Component } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
import BoxComponent from './BoxComponent';
import CalculatorButton from './CalculatorButton';
import './style.css';
import './bootstrap.min.css';
import './bootstrap-responsive.min.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    //this.handelUserDetailAdd = this.handelUserDetailAdd.bind(this);
    this.state = { inputText: '0', result: '' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleButtonClick(e){
    const clicked_button = e.target.value;
    switch(clicked_button){
      case "C":
        this.setState({inputText: '0', result: ''});
        break;
      case "=":
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "." :
        let query_string_array = this.state.inputText.split("");
        let last_element = query_string_array[query_string_array.length -1];
        if(last_element == "+" || last_element == "-" || last_element == "*" || last_element == "/" || last_element == ".") break;
        else if(query_string_array.length == 1 && last_element == "0"){
          this.setState({inputText: this.state.inputText += clicked_button});
          break;
        }
        else{
          this.setState({inputText: this.state.inputText != "0" ? this.state.inputText += clicked_button : this.state.inputText = clicked_button})
          break;
        }
      default:
        this.setState({inputText: this.state.inputText != "0" ? this.state.inputText += clicked_button : this.state.inputText = clicked_button})
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    const question =  ({ query: this.state.inputText });
    let query_string_array = this.state.inputText.split("");
    let last_element = query_string_array[query_string_array.length -1]; 
    if(last_element == "+" || last_element == "-" || last_element == "*" || last_element == "/"){
      return;
    }
    var self = this;
    axios.post('http://localhost:3001/api/result', question)
    .then(function (response) {
      self.setState({result: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
    <div className="container">
      <form onSubmit= {this.handleFormSubmit}>
        <div className="row-fluid">
          <div className="hero-unit" id="calculator-wrapper">
            <div className="row-fluid">
              <div className="span8">
                <h2>React Calculator</h2>
                <BoxComponent inputText = {this.state.inputText} result = {this.state.result}/>
              </div>
            </div>
          </div>
        </div>
        <div className="span6 well numberFields ">
          <div className="calc-btn">
            <div className="numberFields">
                  <CalculatorButton buttonText= "1" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "2" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "3" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "4" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "5" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "6" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "7" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "8" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "9" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "0" handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "." handleButtonClick={this.handleButtonClick} type='input' />
                  <CalculatorButton buttonText= "C" handleButtonClick={this.handleButtonClick} type='input' />
            </div>
            <div className="operations">
              <CalculatorButton buttonText= "+" handleButtonClick={this.handleButtonClick} type='input' />
              <CalculatorButton buttonText= "-" handleButtonClick={this.handleButtonClick} type='input' />
              <CalculatorButton buttonText= "/" handleButtonClick={this.handleButtonClick} type='input' />
              <CalculatorButton buttonText= "*" handleButtonClick={this.handleButtonClick} type='input' />
            </div>
            <div className="sum">
              <CalculatorButton buttonText= "=" handleButtonClick={this.handleButtonClick} type='input' />
            </div>
          </div>
        </div>
      </form>
    </div>
  
      
    )
  }
}
export default Calculator;

