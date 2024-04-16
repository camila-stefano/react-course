import { useState } from 'react'
import Container from './components/Container'
import Card from './components/Card'
import UserForm from './components/UserForm'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  
  const submit = user => {
    setUsers([
      ...users,
      user,
    ])
  }

  return (
    <Container>
      <Card>  
        <UserForm submit={submit} />
      </Card>
      <Card>
        <ul className='list'>
          {users.map(x => 
          <li key={x.email}>{`Fullname: ${x.name} ${x.lastname} Email: ${x.email}`}</li>)}
        </ul>
      </Card>
    </Container>
  )
}

export default App