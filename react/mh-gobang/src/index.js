import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const row = 15;
const col = 15;
/*
class Square extends React.Component {
  render() {
    return
  }
}*/

class Gride extends React.Component{
/*  render() {
    let buttonRow = [];
    for(let i = 0; i < row; i++) {

      for(let j =0; j < col; j++) {
        buttonRow.push(<button/>)
      }
    }
      return ({buttonRow});
  }*/

  render() {
    let items = [];
    for (let i = 0; i < 3; i++) {
       items.push(<div className="item" key={index}>{i}</div>);
    }
    return (
      <div>
        {items}
      </div>
    )
}
/*
class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<button/>);
  }
}*/

ReactDOM.render(
  <Gride />,
  document.getElementById('root')
);
