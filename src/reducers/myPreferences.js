const myPreferences = []

export default (state=myPreferences, {type,payload} = {}) => {

  switch(type){

    case 'LIKE':
      state = state.concat(payload.split('/')[payload.split('/').length-2])
      return state
    case 'DISLIKE':
      return state
    case 'UPDATE_PREFS':
      return state.concat(payload.split('/')[payload.split('/').length-2])
    default:
      return state
  }
}
