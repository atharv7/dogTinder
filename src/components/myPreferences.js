import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import './myPreferences.css'

class MyPreferences extends PureComponent {

  render() {
    return(
      <div className="MyPreferences"><b>Your Likes:</b><br/>{this.props.likes.toString()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  likes: state.myPreferences
    }
}

export default connect(mapStateToProps)(MyPreferences)
