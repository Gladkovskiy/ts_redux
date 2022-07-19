import {IUserAction, IUsersState, UserActionTypes} from '../../types/user'

const initialState: IUsersState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: IUserAction
): IUsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null}
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {...state, loading: false, error: null, users: action.payload}
    case UserActionTypes.FETCH_USERS_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
