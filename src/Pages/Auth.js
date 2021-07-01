import React, { useState } from 'react'
import { Login, Signup } from '../Components'

function Auth() {
    const [showLogin, setShowLogin] = useState(true)

    if (showLogin === false) {
        return <Signup setShowLogin={setShowLogin} />
    }


    return (
        <div>
            <Login setShowLogin={setShowLogin}/>        
        </div>
    )
}

export default Auth
