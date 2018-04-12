import React,{ PureComponent } from 'react'
import {connect} from 'react-redux'


class DogDisplayer extends PureComponent {

  render() {
return (
      <div>
      <img style = {{maxWidth: '500px'}} src={this.props.currentPic} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPic: state.dogDisplayer
  }
}
export default connect(mapStateToProps)(DogDisplayer)
