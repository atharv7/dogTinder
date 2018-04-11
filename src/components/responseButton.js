import React, {PureComponent} from 'react'

class Button extends PureComponent {
  render() {
    return (
      <div>
      <button type='like'>Like</button>
      <button type='like'>Dislike</button>
      </div>
    )
  }
}

export default Button
