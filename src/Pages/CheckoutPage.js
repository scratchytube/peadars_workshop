import React from 'react'
import { PageHero } from '../Components'
import styled from 'styled-components'

const CheckoutPage = () => {
    return (
        <main>
            <PageHero title='checkout' />
            <Wrapper className='page'>
            <h1>checkmeout heree</h1>
            </Wrapper>
        </main>
    )
}

export default CheckoutPage

const Wrapper = styled.div``
