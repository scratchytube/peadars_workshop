import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import styled from 'styled-components'

const FeaturedProducts = () => {
    const featured = useSelector((state) => state.product.featuredProducts)
    

    return (
        <Wrapper className='section' >
            <div className="title">
                <h2>Featured Products</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center featured">
                {featured.map((product) => {
                  return  <Product key={product.id} {...product} />
                })}
            </div>
        </Wrapper>
    )
}

export default FeaturedProducts

const Wrapper = styled.section`
background: var(--clr-grey-10);


`