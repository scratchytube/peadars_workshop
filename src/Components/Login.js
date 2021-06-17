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
        <Wrapper className='page-100'>
            <div className="login">
                <form onSubmit={handleSubmit} autoComplete='off' >
                    <h2>Welcome Back!</h2>
                    {/* <label>Username</label> */}
                    <input 
                    className='field-input'
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange} 
                    />
                    {/* <label>Password</label> */}
                    <input
                    className='field-input' 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} 
                    />
                    <input className='btn' type="submit" value="Login" />
                </form>
            </div>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
div {
    display:flex;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.field-input {
    margin-bottom: 1rem;
    width: 250px;
    height: 2rem;
    padding: 0.5rem;
    background: var(--clr-primary-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
}
`
