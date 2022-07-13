import React, { Component }  from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = { 
    counters:[
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
      {id:5, value:0},
    ]
   } ;
    
  
 
   handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
   }

   handleDecrement=(counter)=>{
    if(counter.value===0){

    }
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
   }

   handleDelete=(counterID)=>{
    const counters=this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters});
  }
  onReset=()=>{
    const counters=[...this.state.counters];
    counters.forEach(counter=>(
      counter.value=0
      )); 
      this.setState({counters});
      console.log("HELLO");
  }
  render() { 
    return (
      <React.Fragment>
      <NavBar len={this.state.counters.length}/>
      <main className='container'>
       {this.state.counters.map(counter=>(
          <Counters key={counter.id}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          counter={counter}
          onReset={this.handleReset}>
            </Counters>))}
          </main>
          <button className='btn btn-info btn-lg'  onClick={this.onReset}>RESET</button>
      </React.Fragment>
    );
  }
}
 
export default App;


