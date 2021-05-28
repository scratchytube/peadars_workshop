import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProduct } from '../redux/product'
import styled from 'styled-components'
import { ProductImages, PageHero, Stars, AddToCart } from '../Components'
import { formatPrice } from '../utils/helpers'

function SingleProductPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const productObject = useSelector((state) => state.product.singleProduct)
    const { 
        name, 
        price, 
        description, 
        stock, 
        stars, 
        reviews,
        images,
    } = productObject
    

    // single product fetch
    useEffect(() => {
        fetch(`https://course-api.com/react-store-single-product?id=${id}`)
        .then((r) => r.json())
        .then(singleServing => {
            dispatch(singleProduct(singleServing))
        })
    }, [id, dispatch])

    console.log(productObject)


    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className="section section-center page">
                <Link to='/products' className='btn'>back to products</Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>{name}</h2>
                        <Stars />
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'> {description}</p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'out of stock'}
                        </p>
                        <hr />
                        { stock > 0 && <AddToCart /> }
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
    gap: 4rem;
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
