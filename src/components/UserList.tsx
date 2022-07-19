import {FC, useEffect} from 'react'
import {useActionUsers} from '../hooks/useAppAction'
import {useAppSelector} from '../hooks/useAppDispatchSelector'

const UserList: FC = () => {
  const {error, loading, users} = useAppSelector(state => state.user)
  const {fetchUsers} = useActionUsers()
  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <h2>Загрузка...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList
