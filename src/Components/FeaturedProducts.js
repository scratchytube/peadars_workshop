import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
                {featured.slice(0,3).map((product) => {
                  return  <Product key={product.id} productObjects={product} />
                })}
            </div>
            <Link to='/products' className='btn' >
                all products
            </Link>
        </Wrapper>
    )
}

export default FeaturedProducts

const Wrapper = styled.section`
background: var(--clr-grey-10);
.featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
        height: 350px;
    }
}
.btn {
    display: block;
    width: 148px;
    margin: 0  auto;
    text-align: center;
}
@media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

`