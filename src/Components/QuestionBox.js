import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './style.css';

class QuestionBox extends Component {
  
  render(props) {
    return (
      <div className="header">
        <input className="uneditable-input" type="text" disabled value={this.props.question}/>
      </div>
    )
  }
}
export default QuestionBox;