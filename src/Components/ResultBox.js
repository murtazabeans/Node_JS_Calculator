import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './style.css';

class ResultBox extends Component {
  render(props) {
    return (
      <div className="header">
        <input className="uneditable-input" type="text" disabled value={this.props.result}/>
      </div>
    )
  }
}
export default ResultBox;

