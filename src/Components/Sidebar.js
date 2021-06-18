import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideBar } from '../redux/product'
import CartButtons from './CartButtons'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
    const dispatch = useDispatch()
    const sidebar = useSelector((state) => state.product.isSideBar)
    const user = useSelector(state => state.user.user)

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar())
    }


    return (
        <SidebarContainer>
            <aside className={`${ sidebar ? `sidebar show-sidebar` : 'sidebar' }`}>
                <div className="sidebar-header">
                    <img src={logo} className="logo" alt="peaders workshop" />
                    <button className="close-btn" type='button' onClick={handleToggleSideBar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    <li onClick={handleToggleSideBar} >
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={handleToggleSideBar} >
                        <Link to='/about'>About</Link>
                    </li>
                    <li onClick={handleToggleSideBar} >
                        <Link to='/products'>The Goods</Link>
                    </li>
                    { user && 
                        <li onClick={handleToggleSideBar} >
                            <Link to='/checkout'>Checkout</Link>
                        </li>
                    }
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
.links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
}
.links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
}
.show-sidebar {
    transform: translate(0);
    z-index: 999;
}
.cart-btn-wrapper {
    margin: 2rem auto;
}
@media screen and (min-width: 992px) {
    .sidebar {
        display: none;
    }
}
`