import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
    const [ isOpen ] = useState(true)
    return (
        <SidebarContainer>
            <aside className={isOpen ? `sidebar show-sidebar` : 'sidebar'}>
                <div className="sidebar-header">
                    <img src={logo} className="logo" alt="peaders workshop" />
                    <button className="close-btn" type='button'>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/products'>The Goods</Link>
                    </li>
                    <li>
                        <Link to='/checkout'>Checkout</Link>
                    </li>
                </ul>
                <CartButtons />
            </aside>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
text-align: center;
.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
}
.close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
}
.close-btn:hover {
    color: var(--clr-red-light)
}
.logo {
    justify-self: center;
    height: 160px;
}
.links {
    margin-bottom: 2rem;
}
`


