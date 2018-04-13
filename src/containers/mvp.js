import DogDisplayer from '../components/dogDisplayer'
import ResponseButton from '../components/responseButton'
import MyPreferences from '../components/myPreferences'
import DisplayMatches from '../components/displayMatches'
import React,{PureComponent} from 'react'

class MVP extends PureComponent {

  render() {
    return (
      <div className="innerAppBox">
      <br/><br/>
      <MyPreferences />
      <br/><br/>
      <DisplayMatches /><br/>
      <DogDisplayer /><br/><br/><br/>
      <ResponseButton className="Dislike"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ResponseButton className="Like"/>
      </div>
    )
  }
}
export default MVP
