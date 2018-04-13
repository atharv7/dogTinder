import React,{ PureComponent } from 'react'
import {connect} from 'react-redux'
import * as request from 'superagent'
import {fetchImage} from '../actions/fetchImage'

class DogDisplayer extends PureComponent {
componentWillMount() {
  this.props.fetchImage()
}

  render() {

return (
      <div>
      <img className="displayDogStyle" style = {{maxWidth: '500px'}} src={this.props.currentPic} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPic: state.dogDisplayer
  }
}
export default connect(mapStateToProps, {fetchImage})(DogDisplayer)
