import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    const logout = () => {
        axios.post('http://localhost:8000/api/user/logout', {}, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))

    }
  return (
    <div>
        <h1>Welcome Dashboard</h1>
        <button className='btn btn-danger' onClick={logout}>Log Out</button>
    </div>

  )
}

export default Dashboard