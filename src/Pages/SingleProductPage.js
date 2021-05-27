import React, { useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singleProduct } from '../redux/product'
import styled from 'styled-components'

function SingleProductPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const productObject = useSelector((state) => state.product.singleProduct)
    // const singleLoading = useSelector((state) => state.product.singleProductLoading)

    // single product fetch
    useEffect(() => {
        fetch(`https://course-api.com/react-store-single-product?id=${id}`)
        .then((r) => r.json())
        .then(singleServing => {
            dispatch(singleProduct(singleServing))
        })
    }, [id, dispatch])

    console.log(productObject)
    // console.log(singleLoading)


    return (
        <div>
            <h4>single product page</h4>
        </div>
    )
}

export default SingleProductPage
