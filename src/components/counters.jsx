import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
  

  render() { 
    const {onReset ,counters,onIncrement , onDecrement , onDelete}=this.props;
  //  console.log(counters);
    return (

      <React.Fragment>
        {counters.map((counter)=>(
        <Counter 
        key={counter.id}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        counter={counter}>
        </Counter>))}
        
        
        <button className='btn btn-info btn-lg'  onClick={onReset}>RESET</button>
      </React.Fragment>
    );
  }
}
 
export default Counters;