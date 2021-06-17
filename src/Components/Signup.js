import React, { useState } from 'react'
import styled from 'styled-components'

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    })
    const { username, email, password } = formData

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <Wrapper>
            <form onSubmit={handleSubmit} autoComplete='off' >
                <h1>Signup</h1>

                <label>Email</label>
                <input 
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                 />

                 <label>Username</label>
                 <input 
                 type="text"
                 name="username"
                 value={username}
                 onChange={handleChange} 
                 />

                 <label>Password</label>
                 <input 
                 type="password"
                 name="password"
                 autoComplete='current-password'
                 value={password}
                 onChange={handleChange} />

                 <input type="submit" value='Signup' />
            </form>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`

`
