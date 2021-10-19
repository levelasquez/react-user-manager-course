import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: '',
    lastname: '',
    email: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    submit(form)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default UserForm
