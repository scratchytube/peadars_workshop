import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div>
            <h4>navvie</h4>
        </div>
    )
}

export default Navbar

const NavContainer = styled.nav`
height: 5rem;
display: flex;
align-items: center;
justify-content: center;

.nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width)
}
.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 175px;
        margin-left: -15px;
    }

}

`
