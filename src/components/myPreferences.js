import React,{PureComponent} from 'react'
import {connect} from 'react-redux'

class MyPreferences extends PureComponent {

  render() {
    return(
      <div className="MyPreferences">Your Likes:<br/>{this.props.likes}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    likes: state.myPreferences
  })
}

export default connect(mapStateToProps)(MyPreferences)
