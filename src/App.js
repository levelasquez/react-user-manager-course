import Card from './components/Card'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  const [form, handleChange] = useForm({ name: '', lastname: '', email: '' })

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input
              type="text"
              name="name"
              label="Name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastname"
              label="Lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="email"
              label="Email"
              value={form.email}
              onChange={handleChange}
            />
            <Button>Send</Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default App
