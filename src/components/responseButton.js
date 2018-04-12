import React, {PureComponent} from 'react'
import './responseButton.css'
import {connect} from 'react-redux'

class ResponseButton extends PureComponent {
  constructor(props){
    super(props)
    this.onclickhandler = this.onclickhandler.bind(this)
  }
  onclickhandler = (e) => {
    if(this.props.className==='Like'){
      this.props.dispatch({type: 'LIKE',payload: this.props.currentPic})
    }
    else {
      this.props.dispatch({type: 'DISLIKE',payload: this.props.currentPic})
    }
  }
 render() {
   return (

     <button className={this.props.className} onClick={this.onclickhandler()}>{this.props.className}</button>

   )
 }
}
const mapStateToProps = (state) => {
  return {
    currentPic: state.currentPic
  }
}
export default connect(mapStateToProps)(ResponseButton)
