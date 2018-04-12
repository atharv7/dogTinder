import React,{ PureComponent } from 'react'



var a = ["1", "2", "3", "5", "7"], b = ["101", "2", "1", "10", "7"];
var equals = a.concat(b.filter(function (item) {
    return a.indexOf(item) < 0;
}));



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
