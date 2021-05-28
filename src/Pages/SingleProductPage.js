import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProduct } from '../redux/product'
import styled from 'styled-components'
import { ProductImages, PageHero, Stars } from '../Components'
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
        company, 
        images 
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
                    <ProductImages />
                    <section className="content">
                        <h2>{name}</h2>
                        <Stars />
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'> {description}</p>
                        <p className='info'>
                            <span>Available</span>
                        </p>
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProductPage

const Wrapper = styled.main`

`
