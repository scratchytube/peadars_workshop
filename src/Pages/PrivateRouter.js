import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouter = ({ children, ...rest }) => {
    const user = useSelector(state => state.user.user)

    return (
        <Route {...rest} render={() => {
            return user ? children : <Redirect to='/' ></Redirect>
        }}
        ></Route>
    )
}

export default PrivateRouter
