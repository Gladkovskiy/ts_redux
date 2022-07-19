import axios from 'axios'
import {Dispatch} from 'redux'
import {UserActionTypes} from '../../types/user'
import {IUserAction} from '../../types/user'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Ошибка при загрузке пользователя',
      })
    }
  }
}
