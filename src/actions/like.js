import LIKE from './types'
import FETCH_IMAGE from './types'

export const like = (picture) => (dispatch) => {

  return dispatch({
    type: LIKE,
    payload: picture
  })
}
