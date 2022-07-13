import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
  

  render() { 
    const {onReset ,counter,onIncrement , onDecrement , onDelete}=this.props;
  //  console.log(counters);
    return (

      <React.Fragment>
        
        <Counter 
        key={counter.id}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        counter={counter}>
        </Counter>
      </React.Fragment>
    );
  }
}
 
export default Counters;