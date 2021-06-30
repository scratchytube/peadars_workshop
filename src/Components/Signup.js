import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { currentUser } from '../redux/user'
import { Link, useHistory } from 'react-router-dom'
import { defaultCart } from '../redux/cart'
import styled from 'styled-components'

const Signup = ({setShowLogin }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
    })
    const { name, email, password } = formData
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/api/v1/signup', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newUser) => {
            if (newUser.errors) {
                setErrors(newUser.errors)
            } else {
                const { user, token} = newUser
                localStorage.setItem('token', token)
                createCart(user)
                dispatch(currentUser(user))
                history.push('/')
            }
        })
    }

    const createCart = theNewUser => {
        fetch('http://localhost:3000/api/v1/orders', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                user_id: theNewUser.id,
                checked_out: false
                })
            }) 
            .then((r) => r.json())
            .then(console.log)
        //     .then(currentCart => {
        //         console.log(currentCart)
        //         console.log(currentCart.product_orders)
        //         dispatch(defaultCart(currentCart.product_orders))
        // })
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
                        value={email.trim()}
                        onChange={handleChange}
                        />

                        <input 
                        placeholder='Name'
                        className='field-input'
                        type="text"
                        name="name"
                        value={name}
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

                        { errors.map(error => {
                            return <p key={error} className='error' >{error}</p>
                        })}

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

.error {
    color: var(--clr-red-dark)
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
