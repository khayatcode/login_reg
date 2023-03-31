import React from 'react'
import LoginForm from './LoginForm'
import RegistForm from './RegistForm'

const RegLog = () => {
  return (
    <div>
        <div className=" container row">
            <RegistForm />
            <LoginForm />
        </div>
    </div>
  )
}

export default RegLog