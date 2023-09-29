import { useMemo } from 'react'

import useFetchUsers from '../../hooks/useFetchUsers';
import { mockUsers } from '../../constants';
import UserInfo from './UserInfo';

function Users() {
  const { users } = useFetchUsers('users')

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
  }

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

  return (
    <>
      <h1>Users</h1>
      {/* {error && <p>{error} </p>} */}
      <ul>
        {mockUsers.map((user) => (
          <UserInfo key={user.id} user={user} />
        ))}
      </ul>
    </>
  )
}

export default Users