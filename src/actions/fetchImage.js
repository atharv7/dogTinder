import * as request from 'superagent'
import FETCH_IMAGE from './types'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const fetchImage = () => (dispatch) => {
  // alert('fetchimage called')
   request
    .get(`${baseUrl}`)
    .then(response => dispatch({
      type: FETCH_IMAGE,
      payload: response.body.message
    }))
    .catch(err => alert(err))
}
