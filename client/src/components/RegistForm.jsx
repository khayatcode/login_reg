import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

// Create a Registration Form Component using Bootstrap with firstname, lastname, email, password, and confirm password fields.

const RegistForm = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        axios.post('http://localhost:8000/api/user/register', userInfo, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="container mt-3 col-6 offset-1">
        <h1 className='mb-3'>Registration Form</h1>
        <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="firstName" name="firstName" onChange={changeHandler} placeholder="First Name"/>
                <label htmlFor="firstname">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="lastName" name="lastName" onChange={changeHandler} placeholder="Last Name"/>
                <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" name="email" onChange={changeHandler} placeholder="Email"/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" name="password" onChange={changeHandler} placeholder="Password"/>
                <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password"/>
                <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default RegistForm