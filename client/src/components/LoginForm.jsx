import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '' 
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/user/login', userInfo, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
    }


  return (
    <div className='container mt-3 col-5'>
        <h1>Login Form</h1>
        <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" name="email" onChange={changeHandler} placeholder="Email"/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" name="password" onChange={changeHandler} placeholder="Password"/>
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}


export default LoginForm