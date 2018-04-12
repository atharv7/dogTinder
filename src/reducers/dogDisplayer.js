import {currentPic} from './responseButton'

export const imageURL = 'https://dog.ceo/api/breeds/image/random'

export default (state=currentPic, {type,payload} = {}) => {
  return currentPic
}
