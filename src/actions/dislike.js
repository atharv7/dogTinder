import DISLIKE from './types'

export const dislike = (picture) => (dispatch) => {
  return dispatch({
    type: DISLIKE,
    payload: picture
  })
}
