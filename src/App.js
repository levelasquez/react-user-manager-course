import useForm from './hooks/useForm'

function App() {
  const [form, handleChange] = useForm({ name: '' })

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
    </form>
  )
}

export default App
