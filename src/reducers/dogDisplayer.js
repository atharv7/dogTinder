import {currentPic} from './responseButton'
import FETCH_IMAGE from '../actions/types'
export const imageURL = 'https://dog.ceo/api/breeds/image/random'

export default (state=currentPic, {type,payload} = {}) => {
switch(type) {
  case 'FETCH_IMAGE':
    return payload
  case 'LIKE':
    return payload
  default: return state
}

}
