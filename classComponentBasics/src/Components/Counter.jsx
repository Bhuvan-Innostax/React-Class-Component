import React, { Component } from 'react'

class Counter extends React.Component {

    componentDidUpdate(prevprops , prevState){
        if(this.props.numbers !== prevprops.numbers){
            console.log("Component Updated ")
            console.log(prevprops.numbers);
            console.log(this.props.numbers);
        }
    }

  render() {
    return (
      <div>Counter : {this.props.numbers}</div>
    )
  }
}

export default Counter;