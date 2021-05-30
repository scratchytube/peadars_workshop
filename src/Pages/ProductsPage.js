import React from 'react'
import styled from 'styled-components'
import { PageHero, Filters, Sort, ProductList } from '../Components'

const ProductsPage = () => {
    return (
        <main>
            <PageHero title='products' />
            <Wrapper className='page'>
                <div className="section-center products">
                    <Filters />
                    <div>
                        <Sort />
                        <ProductList />
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}

export default ProductsPage

const Wrapper = styled.div`

`
