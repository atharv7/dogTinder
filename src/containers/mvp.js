import DogDisplayer from '../components/dogDisplayer'
import ResponseButton from '../components/responseButton'
import MyPreferences from '../components/myPreferences'
import React,{PureComponent} from 'react'

class MVP extends PureComponent {

  render() {
    return (
      <div>
      <br/><br/>
      <MyPreferences />
      <br/><br/><br/>
      <DogDisplayer /><br/><br/><br/>
      <ResponseButton className="Like"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ResponseButton className="Dislike"/>
      </div>
    )
  }
}
export default MVP
