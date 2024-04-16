import Input from "./Input"
import Button from "./Button"
import useForm from '../hooks/useForm'

const UserForm = ({ submit }) => {
    const [form, handleChange, reset] = useForm({ 
        name: '', 
        lastname: '', 
        email: ''
    })
    const handleSubmit = (e) => {
    e.preventDefault()
    submit(form)
    reset()
    }
    return (
        <form onSubmit={handleSubmit}>
          <Input label={"Name"} name={"name"} placeholder={"Name placeholder"} value={form.name } onChange={handleChange} />
          <Input label={"Lastname"} name={"lastname"} placeholder={"Lastname placeholder"} value={form.lastname } onChange={handleChange} />
          <Input label={"Email"} name={"email"} placeholder={"@gmail.com"} value={form.email } onChange={handleChange} />
          <Button>SEND IT</Button>
        </form>
    )
}

export default UserForm