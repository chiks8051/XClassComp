import React, { Component } from 'react';



export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state ={
            counter:0
        }
        this.incrementButton = this.incrementButton.bind(this);
        this.decrementButton = this.decrementButton.bind(this);
    }

    incrementButton() {

        this.setState({
            counter: this.state.counter +1
    })
    }
    decrementButton() {
        this.setState({
            counter: this.state.counter -1
    })
    }

    render() {
      return (
        <div>
          <h1>Counter App</h1>
          <p>Count:{this.state.counter}</p>
          <button onClick={this.incrementButton}>Increment</button>
          <button onClick={this.decrementButton}>Decrement</button>
        </div>
      )
    }
}