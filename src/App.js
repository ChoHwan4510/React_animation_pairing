import React, { Component, Fragment }  from 'react';
import './App.css';

class App extends Component{
  state = {
    number: 0
  }
  handleIncrease = () =>{
    const {number} = this.state;
    this.setState({
      number : number+1
    });
  }

  handleDecrease = () =>{
    const {number} = this.state;
    this.setState({
      number : number -1
    });
  }
  render(){
    return(
      <Fragment>
        <div>
          <h1>카운터</h1>
          <div>값 : {this.state.number}</div>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
        </div> 
      </Fragment>
    );
  }
}

export default App;
