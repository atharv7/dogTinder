const myPreferences = [1,2,3]

const changePic = () => {}

export default (state=myPreferences, {type,payload} = {}) => {
  switch(type){
    case 'LIKE':
      changePic()
      state = state.concat(payload)
      return state
    case 'DISLIKE':
      changePic()
      return state
    default:
      return state
  }
}
