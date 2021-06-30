import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { currentUser } from '../redux/user'
import { defaultCart, cartOrderId } from '../redux/cart'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Login = ({setShowLogin}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                const { user, token} = data
                localStorage.setItem('token', token)
                dispatch(currentUser(user))
                setDefaultCart(user)
                history.push('/')
            }
        })
    }

    const setDefaultCart = (loggedInUser) => {
        fetch(`http://localhost:3000/api/v1/orders/`)
        .then(r => r.json())
        .then(kingCart => {
            const cartCart = [...kingCart]
            .filter((cart) => cart.user_id === loggedInUser.id)
            .filter((checked) => checked.checked_out === false)
            const first = cartCart[0]
            dispatch(cartOrderId(first.id))
            dispatch(defaultCart(first.products))
        })
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
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={formData.email.trim()}
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
                        { errors.map(error => {
                            return <p key={error} className='error' >{error}</p>
                        })}
                    <input className='btn' type="submit" value="Login" />
                    </div>
                    <div className='login-links' >
                        <p>Don't have an account? <Link onClick={() => setShowLogin(false)} >Register</Link></p>
                        <Link>Forgot password?</Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`


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

.error {
    color: var(--clr-red-dark)
}
`
