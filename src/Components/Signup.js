import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Signup = ({setShowLogin }) => {
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
        <Wrapper className='page-100' >
            <div className='signup' >
                <form onSubmit={handleSubmit} autoComplete='off' >
                    <h5>Welcome to Peadars' Workshop</h5>

                    <div className='input-div' >

                        <input 
                        placeholder='Email'
                        className='field-input'
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        />

                        <input 
                        placeholder='UserName'
                        className='field-input'
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange} 
                        />

                        <input 
                        placeholder='Password'
                        className='field-input'
                        type="password"
                        name="password"
                        autoComplete='current-password'
                        value={password}
                        onChange={handleChange} />

                        <input className='btn' type="submit" value='Signup' />
                    </div>
                    <div className="back-to-signin">
                        <p>Already have an account? <Link onClick={() => setShowLogin(true)} >Sign-In</Link></p>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default Signup

const Wrapper = styled.div`
.signup {
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

.back-to-signin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem
}
`
