import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stump from '../assets/stump.jpg'
import Tools from '../assets/tools.jpg'

const Hero = () => {
    return (
        <Wrapper className='section-center'>
            <article className="content">
                <h1>Welcome</h1>
                <p>
                    Hi, my name is Peader. I'm Irish. I live in Texas with my beautiful family. I make beautiful wood things me thinks! Sláinte!
                </p>
                <Link to='/products' className='btn hero-btn'>
                    Shop
                </Link>
            </article>
            <article className='img-container'>
                <img src={Stump} alt="tree stump" className='main-img' />
                <img src={Tools} alt="tools" className='accent-img' />
            </article>
        </Wrapper>
    )
}

export default Hero

const Wrapper = styled.section`
 min-height: 60vh;
 display: grid;
 place-items: center;
 .img-container {
     display: none;
 }

 p {
     line-height: 2;
     max-width: 45em;
     margin-bottom: 2rem;
     color: var(--clr-grey-5);
     font-size: 1rem;
 }

 @media (min-width: 992px) {
    height: calc(100vh - 6rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
        font-size: 1rem;
    }
    .hero-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
    .img-container {
        display: block;
        position: relative;
    }
    .main-img {
        width: 100%;
        height: 550px;
        position: relative;
        border-radius: var(--radius);
        display: block;
        object-fit: cover;
    }
    .accent-img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 250px;
        transform: translateX(-50%);
        border-radius: var(--radius)
    }
    .img-container::before {
        content: '';
        position: absolute;
        width: 10%;
        height: 80%;
        background: var(--clr-primary-10);
        bottom: 0%;
        left: -8%;
        border-radius: var(--radius);
    }
`

