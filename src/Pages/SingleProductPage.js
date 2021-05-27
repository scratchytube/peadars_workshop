import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProduct } from '../redux/product'
import styled from 'styled-components'
import { PageHero } from '../Components'

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
        id:sku, 
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
        </Wrapper>
    )
}

export default SingleProductPage

const Wrapper = styled.main`

`
