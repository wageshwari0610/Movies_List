import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  formatText(){
    return this.props.counter.value===0?"btn btn-secondary":"btn btn-primary";
  }

  render() { 
    return (
      <div >
        <span className={this.formatText()}>{this.props.counter.value}</span>
        <button className="btn btn-success btn-lg m-2 " onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
        <button className="btn btn-warning btn-lg m-2 " onClick={()=>this.props.onDecrement(this.props.counter)}>-</button>
        <button className="btn btn-danger btn-lg m-2" onClick={()=>this.props.onDelete(this.props.counter.id)} >X</button>
      </div>
    );
  }
}
 
export default Counter;