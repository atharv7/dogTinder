const myPreferences = []

export default (state=myPreferences, {type,payload} = {}) => {

  switch(type){
    case 'UPDATE_PREFS':
      return state.concat(payload.split('/')[payload.split('/').length-2].replace('-',' '))
    default:
      return state
  }
}
