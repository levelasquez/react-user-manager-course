import useForm from './hooks/useForm'
import Input from './components/Input'

function App() {
  const [form, handleChange] = useForm({ name: '', lastname: '' })

  return (
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
    </form>
  )
}

export default App
