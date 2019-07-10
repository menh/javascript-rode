import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <p className="App-intro">
           <code></code> 文件中修改。
        </p>
      </div>
    );
  }
}

export class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1> hello clock </h1>
        <h2> {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={handleClick}></button>
      </div>
    );
  }
}
function handleClick(e) {
    
    console.log('链接被点击');
  }
export class Welcome extends Component{
  render(){
    return <h3>welcome </h3>;
  }
}
export default App;
