import axios from 'axios'

export const GET_PERSON = 'GET_PERSON'
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'

export const getPerson = () => dispatch => {
  dispatch(setIsFetching(true))
  axios.get('https://randomuser.me/api')
    .then(res => {
      dispatch(getPersonSuccess(res.data.results[0]))
    })
    .catch(err => {
      // todo: dispatch getPersonError
      console.log(err.message)
    })
    .finally(() => {
      dispatch(setIsFetching(false))
    })
}

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING, payload: isFetching
})

export const getPersonSuccess = person => ({
  type: GET_PERSON_SUCCESS, payload: person
})
