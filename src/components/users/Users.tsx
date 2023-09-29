import { useCallback, useEffect, useMemo, useState } from 'react'

import useFetchUsers from '../../hooks/useFetchUsers';
import { mockUsers } from '../../constants';
import UserInfo from './UserInfo';
import { User } from '../../types/User.types';

function Users() {
  // const { users } = useFetchUsers('users')
  /* 
    const renderMemoizedMockUsers = () => {
      return (
        <div>
          <ul>
            {Array.isArray(users) &&
              // mockUsers.map((user) => <UserInfo key={user.id} user={user} />)}
              mockUsers.map((user) => <li key={user.id}>{user.name}</li>)}
          </ul>
        </div>
      )
    } */

  /* const renderMemoizedUsers = useMemo(() => {
    return (
      <>
        <ul>
          {Array.isArray(users) &&
            users.map((user) => <UserInfo key={user.id} user={user} />)}
        </ul>
      </>
    )
  }, [users]) */
  /* const renderMemoizedUsers = useMemo(() => {
    return (
      <>
        {errorMsg ? (
          <p>
            <b>MSG: {errorMsg}</b>
          </p>
        ) : (
          <ul>
            {Array.isArray(users) &&
              users.map((user) => <UserInfo key={user.id} user={user} />)}
          </ul>
        )}
        <div>
          <button onClick={fetchData}>Fetch Users</button>
        </div>
      </>
    );
  }, [errorMsg, users, fetchData]); */


  /* return (
    <>
      <h2>Users</h2>
      {renderMemoizedMockUsers()}
    </>
  ) */
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string>('')

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      const userNames = users.map(({ name }: { name: string }) => name)
      setUsers(userNames)
    } catch (error) {
      setError('Error fetching userss')
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <>
      <h1>Users</h1>
      {error && <p>{error} </p>}
      <ul>
        {users.map((user) => (
          <UserInfo key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}

export default Users