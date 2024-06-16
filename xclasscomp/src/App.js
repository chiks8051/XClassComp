import { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import  Counter  from "./Counter";

export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        <Counter />
        </BrowserRouter>
      </div>
    )
  }
};
