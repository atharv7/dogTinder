import React,{ PureComponent } from 'react'


var players = [
  {
    name: 'Wayne Rooney',
    age: 31
  },
  {
    name: 'Lionel Messi',
    age: 29
  },
  {
    name: 'Robbie Fowler',
    age: 42
  }
];

var statePlayers = [
  {
    name: 'Wayne Rooney',
    age: 31
  },
  {
    name: 'Lionel Messi',
    age: 29
  },
  {
    name: 'Robbie Fowler',
    age: 42
  }
];

var equals = players.length === statePlayers.length && players.every((e, i) => e.name === statePlayers[i].name && e.age === statePlayers[i].age);
console.log(equals)
class DisplayMatches extends PureComponent {



  render() {
    return (
      <div>
        <li>{console.log(equals)}</li>
      </div>
    )
  }
}

export default DisplayMatches
