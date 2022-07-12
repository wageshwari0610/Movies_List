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
    
  formatText(){
    return this.state.counters.value===0?"btn btn-secondary":"btn btn-primary";
  }
 
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
  handleReset(){
    this.state.counters.map(counters=>(
      counters.value=0)); 
  }
  render() { 
    return (
      <React.Fragment>
      <NavBar len={this.state.counters.length}/>
      <main className='container'>
       {this.state.counters.map(counter=>(
          <Counters key={counter.id}
          onIncrement={this.props.handleIncrement}
          onDecrement={this.props.handleDecrement}
          onDelete={this.props.handleDelete}
          counter={counter}
          onReset={this.props.handleReset}>
            </Counters>))}
          
          
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;


