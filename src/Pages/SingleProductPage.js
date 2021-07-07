import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProduct } from '../redux/product'
import styled from 'styled-components'
import { ProductImages, PageHero, AddToCart, Loading } from '../Components'
import { formatPrice } from '../utils/helpers'

function SingleProductPage() {
    const dispatch = useDispatch()
    const params = useParams()

    const [isLoaded, setIsLoaded] = useState(false)

    const productObject = useSelector((state) => state.product.singleProduct)
    const { 
        name, 
        price, 
        description, 
        stock, 
        images,
    } = productObject   
    
    // single product fetch
    useEffect(() => {
        fetch(`${process.env.REACT_APP_RAILS_URL}/products/${params.id}`)
        .then((r) => r.json())
        .then(singleServing => {
            dispatch(singleProduct(singleServing))
            setIsLoaded(true)
        })
    }, [params.id, dispatch])

    if (!isLoaded) return <Loading />

    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className="section section-center page">
                <Link to='/products' className='btn'>back to products</Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>{name}</h2>
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'> {description}</p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'out of stock'}
                        </p>
                        <hr />
                        { stock > 0 && <AddToCart product={productObject} /> }
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProductPage

const Wrapper = styled.main`
.product-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
}
.price {
    color: var(--clr-primary-5);
}
.desc {
    line-height: 2;
    max-width: 45em;
}
.info {
    text-transform: capitalize;
    width: 300px;
    span {
        font-weight: 700;
    }
}

@media (min-width: 992px) {
    .product-center {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    .price {
        font-size: 1.25rem;
    }
}
`
