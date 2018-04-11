import React,{ PureComponent } from 'react'

const dogarray = ['dog1', 'dog2']

class DisplayLikes extends PureComponent {



  render() {
    return (
      <div>
        <li>{dogarray}</li>
      </div>
    )
  }
}

export default DisplayLikes
