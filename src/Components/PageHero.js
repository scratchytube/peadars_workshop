import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHero = ({ title }) => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>
                    <Link to='/'>/ {title}
                    Home
                    </Link>
                </h3>
            </div>
        </Wrapper>
    )
}

export default PageHero

const Wrapper = styled.section`
background: var(--clr-primary-10);

`
