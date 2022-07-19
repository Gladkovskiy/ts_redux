export interface IUsersState {
  users: any[]
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUserAction {
  type: UserActionTypes.FETCH_USERS
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}

export type IUserAction =
  | IFetchUserAction
  | IFetchUserErrorAction
  | IFetchUserSuccessAction
