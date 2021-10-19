import { useState } from 'react'

import Card from './components/Card'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useForm({
    name: '',
    lastname: '',
    email: '',
  })

  const submit = (event) => {
    event.preventDefault()

    setUsers((previousUsers) => [...previousUsers, form])
    reset()
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastname"
                label="Lastname"
                placeholder="Lastname"
                value={form.lastname}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <Button>Send</Button>
            </form>
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
