import { useState } from 'react'

import Card from './components/Card'
import UserForm from './components/UserForm'
import Container from './components/Container'

function App() {
  const [users, setUsers] = useState([])

  const submit = (user) => setUsers((previousUsers) => [...previousUsers, user])

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((user) => (
              <li
                key={user.email}
              >{`${user.name} ${user.lastname} ${user.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
