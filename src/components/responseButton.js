import React, {PureComponent} from 'react'
import './responseButton.css'
import {connect} from 'react-redux'
import {fetchImage} from '../actions/fetchImage'
import {like} from '../actions/like'
import {dislike} from '../actions/dislike'
import {updatePrefs} from '../actions/updatePrefs'


class ResponseButton extends PureComponent {
  constructor(props){
    super(props)
    this.onclickhandler = this.onclickhandler.bind(this)
  }
  onclickhandler = () => {
    if(this.props.className==='Like'){
      this.props.like(this.props.currentPic)
      this.props.updatePrefs(this.props.currentPic)

    }
    else {
      this.props.dislike(this.props.currentPic)

    }

    this.props.fetchImage()

  }
 render() {
   return (

     <button className={this.props.className} onClick={this.onclickhandler}>{this.props.className}</button>

   )
 }
}
const mapStateToProps = (state) => {
  return {
    currentPic: state.dogDisplayer,
    myPreferences: state.myPreferences
  }
}



export default connect(mapStateToProps, {fetchImage,like,dislike,updatePrefs})(ResponseButton)
