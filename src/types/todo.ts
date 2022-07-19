export interface ITodo {
  userId: number
  title: string
  completed: boolean
  id: number
}

export interface ITodoState {
  todo: ITodo[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodoAction {
  type: TodoActionTypes.FETCH_TODO
}

interface IFetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR
  payload: string
}

interface IFetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS
  payload: ITodo[]
}

interface ISetTodoPageAction {
  type: TodoActionTypes.SET_TODO_PAGE
  payload: number
}

export type ITodoAction =
  | IFetchTodoAction
  | IFetchTodoErrorAction
  | IFetchTodoSuccessAction
  | ISetTodoPageAction
