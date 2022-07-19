import axios from 'axios'
import {Dispatch} from 'redux'
import {ITodo, ITodoAction, TodoActionTypes} from '../../types/todo'

export const fetchTodo = (page: number, limit: number) => {
  return async (dispatch: Dispatch<ITodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODO})

      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
      )
      dispatch({
        type: TodoActionTypes.FETCH_TODO_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: 'Ошибка при загрузке задания',
      })
    }
  }
}

export const setPage = (page: number): ITodoAction => {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  }
}
