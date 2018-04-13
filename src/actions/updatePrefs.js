export const updatePrefs = (myPreferences) => (dispatch) => {

  return dispatch({
    type: 'UPDATE_PREFS',
    payload: myPreferences
  })
}
