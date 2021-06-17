import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <div className='input-div' >
                        <input 
                        className='field-input'
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} 
                        />
                        <input
                        className='field-input' 
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} 
                        />
                    <input className='btn' type="submit" value="Login" />
                    </div>
                    <div className='login-links' >
                        <p>Don't have an account? <Link>Register</Link></p>
                        <Link>Forgot password?</Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`

// .login {
//     width: 360px;
//     padding: 8% 0 0;
//     margin: auto;
// }

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: auto;
}


.input-div {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
}

.field-input {
    margin-bottom: 1.25rem;
    width: 250px;
    height: 2rem;
    padding: 0.5rem;
    background: var(--clr-primary-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
}

.login-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}
`
