import React,{ PureComponent } from 'react'

let array1 = ["1", "2", "3", "4", "5", "6", "7", "8"];
let array2 = ["3", "4", "34", "74", "6"];


function getMatches(user1,user2) {
let equals = user1.filter(function(val) {
 return user2.indexOf(val) != -1;
})

return (equals.length>=3)?'user2':'No Matches Yet!';
}


class DisplayMatches extends PureComponent {



 render() {
   return (
     <div><b>Your Matches:</b><br/>
       {getMatches(array1,array2)}

     </div>
   )
 }
}

export default DisplayMatches
