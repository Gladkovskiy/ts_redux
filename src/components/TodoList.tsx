import {FC, useEffect} from 'react'
import {useActionTodos} from '../hooks/useAppAction'
import {useAppSelector} from '../hooks/useAppDispatchSelector'

const TodoList: FC = () => {
  const {error, limit, loading, page, todo} = useAppSelector(
    state => state.todo
  )
  const {fetchTodo, setPage} = useActionTodos()

  const pages = Array(200 / limit).fill('')

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page, limit])

  if (loading) <h2>Загрузка...</h2>
  if (error) <h2>Ошибка загрузки...</h2>

  return (
    <div>
      <div>
        {todo.map(tod => (
          <div key={tod.id}>
            <input type="checkbox" checked={tod.completed} />
            {tod.title}
          </div>
        ))}
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        {pages.map((_, index) => (
          <div
            key={index}
            onClick={() => setPage(index + 1)}
            style={{border: '1px solid gray', marginLeft: 2}}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
