import React,{ PureComponent } from 'react'


var array1 = ["1", "2", "3", "4", "5", "6", "7", "8"];
var array2 = ["3", "4", "34", "74", "6"];

var equals = array1.filter(function(val) {
  return array2.indexOf(val) != -1;
});


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
