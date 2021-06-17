import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off' >
                <h1>Login</h1>
                <label>Username</label>
                <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange} 
                />
                <label>Password</label>
                <input 
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange} 
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login

const Wrapper = styled.div`

`
