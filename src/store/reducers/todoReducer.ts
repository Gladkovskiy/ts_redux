import {ITodoAction, ITodoState, TodoActionTypes} from '../../types/todo'

const initialState: ITodoState = {
  todo: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = initialState,
  action: ITodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return {...state, loading: true, error: null}
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {...state, loading: false, error: null, todo: action.payload}
    case TodoActionTypes.FETCH_TODO_ERROR:
      return {...state, loading: false, error: action.payload}
    case TodoActionTypes.SET_TODO_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}
