import { useState } from 'react'

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const handleChange = (event) =>
    setForm((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))

  const reset = () => setForm(initialValues)

  return [form, handleChange, reset]
}

export default useForm
