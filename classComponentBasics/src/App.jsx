import React, { Component } from 'react'
import './App.css'
import Counter from './Components/Counter';

export class App extends Component {
  componentDidMount(){
    console.log("first time render ")
  }
  constructor(){
    super();
    this.state = {
      count : 0
    };
  }
  increament(){
    this.setState({
      count : this.state.count + 1
    });
  }
  decreament(){
    this.setState({
      count : this.state.count - 1 
    });
  }
  render() {
    return (<div className='classBlock'>
    <h1>React Class Component </h1>
      <Counter numbers = {this.state.count} />
      <button onClick={this.increament.bind(this)}> Increase</button>
      <button onClick={() => {this.decreament()}}>Decrease</button>
      </div>
    )
  }
}


export default App;